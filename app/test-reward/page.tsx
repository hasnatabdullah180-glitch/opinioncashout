"use client";

import { auth, db } from "@/lib/firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

export default function TestRewardPage() {

  const addReward = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      balance: increment(100),
      surveysCompleted: increment(1),
    });

    alert("Reward Added!");
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">

      <button
        onClick={addReward}
        className="bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-5 rounded-2xl text-2xl"
      >
        Add 100 Points
      </button>

    </main>
  );
}