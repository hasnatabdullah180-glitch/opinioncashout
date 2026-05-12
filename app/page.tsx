"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-green-400 mb-6">
        OpinionCashout
      </h1>

      <p className="text-gray-400 mb-10">
        Earn money by completing surveys
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-green-500 px-6 py-3 rounded-lg font-bold text-black"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="border border-green-500 px-6 py-3 rounded-lg"
        >
          Signup
        </Link>
      </div>
    </main>
  );
}