export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center font-bold text-black">
              O
            </div>
            <h1 className="text-2xl font-bold">OpinionCashout</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#" className="hover:text-green-400 transition">
              Surveys
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Rewards
            </a>
            <a href="#" className="hover:text-green-400 transition">
              Referrals
            </a>
            <a href="#" className="hover:text-green-400 transition">
              FAQ
            </a>
          </nav>

          <button className="bg-green-500 hover:bg-green-400 transition text-black px-5 py-3 rounded-xl font-semibold">
            Sign Up
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <div className="mb-8 bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-2 rounded-full text-sm backdrop-blur-xl">
          ● Live: 485,000+ Americans earning right now
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-6xl">
          Get Paid For
          <br />
          <span className="text-green-400">Your Opinion</span>
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mt-8 leading-relaxed">
          Complete premium surveys from top US brands and cash out instantly
          using PayPal, Crypto, Visa Gift Cards, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-12">
          <button className="bg-green-500 hover:bg-green-400 transition text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(34,197,94,0.5)]">
            Start Earning Free →
          </button>

          <button className="border border-white/10 bg-white/5 hover:bg-white/10 transition px-10 py-5 rounded-2xl font-semibold text-lg backdrop-blur-xl">
            View Surveys
          </button>
        </div>

        <div className="flex gap-8 mt-10 text-gray-500 text-sm flex-wrap justify-center">
          <span>✓ Free to Join</span>
          <span>✓ US Residents 18+</span>
          <span>✓ Instant Withdrawals</span>
          <span>✓ No Spam</span>
        </div>
      </section>

      {/* FLOATING EARNINGS CARD */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-28">
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div>
              <div className="text-gray-400 mb-2">Your balance</div>

              <h2 className="text-6xl font-black text-green-400">
                $42.50
              </h2>

              <div className="w-full h-4 bg-zinc-800 rounded-full mt-6 overflow-hidden">
                <div className="w-[72%] h-full bg-green-500 rounded-full"></div>
              </div>

              <p className="text-gray-500 mt-3">
                $7.50 more to unlock PayPal payout
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-auto">
              <div className="bg-black/40 border border-white/10 p-6 rounded-2xl min-w-[220px]">
                <div className="text-gray-500 text-sm">
                  Healthcare Survey
                </div>

                <div className="text-green-400 text-3xl font-bold mt-2">
                  +$4.00
                </div>

                <div className="text-gray-500 text-sm mt-2">
                  Completed 5m ago
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 p-6 rounded-2xl min-w-[220px]">
                <div className="text-gray-500 text-sm">
                  Referral Bonus
                </div>

                <div className="text-green-400 text-3xl font-bold mt-2">
                  +$5.00
                </div>

                <div className="text-gray-500 text-sm mt-2">
                  Earned 1h ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <h3 className="text-5xl font-black text-green-400">$12M+</h3>
            <p className="text-gray-400 mt-4 text-lg">
              Paid To Members
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <h3 className="text-5xl font-black text-green-400">4.9★</h3>
            <p className="text-gray-400 mt-4 text-lg">
              Average User Rating
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <h3 className="text-5xl font-black text-green-400">2M+</h3>
            <p className="text-gray-400 mt-4 text-lg">
              Surveys Completed
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}