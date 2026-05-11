"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  onAuthStateChanged,
} from "firebase/auth";

export default function AdminPage() {
  const router = useRouter();

  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // CHANGE THIS EMAIL
  const ADMIN_EMAIL = "fariyanhasan18@gmail.com";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          router.push("/login");
          return;
        }

        if (user.email !== ADMIN_EMAIL) {
          router.push("/dashboard");
          return;
        }

        fetchRequests();
      }
    );

    return () => unsubscribe();
  }, [router]);

  const fetchRequests = async () => {
    try {
      const snapshot = await getDocs(
        collection(db, "withdrawRequests")
      );

      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setRequests(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    try {
      const requestRef = doc(
        db,
        "withdrawRequests",
        id
      );

      await updateDoc(requestRef, {
        status: status,
      });

      alert(`Request ${status}`);

      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-5xl font-black text-green-400">
            Admin Panel
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage withdraw requests and users
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-2xl">
          Total Requests: {requests.length}
        </div>

      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center text-2xl text-zinc-400 mt-20">
          Loading...
        </div>
      )}

      {/* EMPTY */}
      {!loading && requests.length === 0 && (
        <div className="text-center text-2xl text-zinc-400 mt-20">
          No Withdraw Requests Found
        </div>
      )}

      {/* REQUESTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {requests.map((item: any) => (
          <div
            key={item.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl"
          >

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-2xl font-bold text-green-400">
                Withdraw Request
              </h2>

              <div
                className={`px-4 py-2 rounded-full text-sm font-bold
                ${
                  item.status === "approved"
                    ? "bg-green-500 text-black"
                    : item.status === "rejected"
                    ? "bg-red-500 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {item.status}
              </div>

            </div>

            <div className="space-y-3 text-lg break-all">

              <p>
                <span className="text-zinc-400">
                  Email:
                </span>{" "}
                {item.email}
              </p>

              <p>
                <span className="text-zinc-400">
                  Amount:
                </span>{" "}
                {item.amount}
              </p>

              <p>
                <span className="text-zinc-400">
                  UID:
                </span>{" "}
                {item.uid}
              </p>

            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 mt-8">

              <button
                onClick={() =>
                  updateStatus(item.id, "approved")
                }
                className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-2xl transition"
              >
                Approve
              </button>

              <button
                onClick={() =>
                  updateStatus(item.id, "rejected")
                }
                className="bg-red-500 hover:bg-red-400 text-white font-bold px-6 py-3 rounded-2xl transition"
              >
                Reject
              </button>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}
