"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        balance: 0,
        surveysCompleted: 0,
        referralEarnings: 0,
        createdAt: new Date(),
      });

      alert("Account Created Successfully!");

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        
        <h1 className="text-4xl font-bold text-green-400 mb-2">
          Join Now
        </h1>

        <p className="text-zinc-400 mb-6">
          Create your OpinionCashout account
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 px-4 rounded-xl bg-black border border-zinc-700 text-white outline-none mb-4"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-12 px-4 rounded-xl bg-black border border-zinc-700 text-white outline-none mb-6"
        />

        <button
          onClick={handleSignup}
          className="w-full h-12 rounded-xl bg-green-500 hover:bg-green-400 transition text-black font-bold"
        >
          Create Account
        </button>
      </div>
    </main>
  );
}