"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import {
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [balance, setBalance] = useState(0);
  const [surveysCompleted, setSurveysCompleted] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      setEmail(user.email || "");

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();

        setBalance(Number(data.balance || 0));
        setSurveysCompleted(Number(data.surveysCompleted || 0));
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const handleWithdraw = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      if (balance < 500) {
        alert("Minimum withdraw is 500 points");
        return;
      }

      setLoading(true);

      await addDoc(collection(db, "withdrawRequests"), {
        uid: user.uid,
        email: user.email,
        amount: balance,
        status: "pending",
        createdAt: new Date(),
      });

      alert("Withdraw Request Submitted Successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-black sticky top-0 z-50">
        <div>
          <h1 className="text-4xl font-black text-green-400">
            OpinionCashout
          </h1>

          <p className="text-zinc-400 mt-1 text-sm">
            {email}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleWithdraw}
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-2xl"
          >
            {loading ? "Loading..." : "Withdraw"}
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 text-white font-bold px-6 py-3 rounded-2xl"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Current Balance
          </p>

          <h2 className="text-5xl font-black text-green-400 mt-4">
            {balance}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Completed Surveys
          </p>

          <h2 className="text-5xl font-black text-green-400 mt-4">
            {surveysCompleted}
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Referral Earnings
          </p>

          <h2 className="text-5xl font-black text-green-400 mt-4">
            0
          </h2>
        </div>
      </div>

      <div className="px-8 pb-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
            <div>
              <h2 className="text-3xl font-bold">
                Live Survey Wall
              </h2>

              <p className="text-zinc-400 mt-1">
                Complete surveys and earn instantly
              </p>
            </div>

            <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full">
              ● LIVE
            </div>
          </div>

          <div className="w-full overflow-hidden bg-white">
            <iframe
              src={`https://offers.cpx-research.com/index.php?app_id=32977&ext_user_id=${auth.currentUser?.uid}`}
              width="100%"
              height="1200"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}