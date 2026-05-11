"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful!");

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        
        <h1 className="text-4xl font-bold text-green-400 mb-2">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mb-6">
          Login to your OpinionCashout account
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
          onClick={handleLogin}
          className="w-full h-12 rounded-xl bg-green-500 hover:bg-green-400 transition text-black font-bold"
        >
          Login
        </button>
      </div>
    </main>
  );
}