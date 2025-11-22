import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Background gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] bg-gradient-to-br from-blue-600/10 to-cyan-500/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200 shadow-[inset_0_0_15px_rgba(139,92,246,0.25)]">
            Futuristic • Cybernetic • F1 Vibes
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Accelerate into a cybernetic future
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            A modern, F1-inspired interface infused with neon purples and deep blues. Interactive 3D motion brings a
            living, breathing hero experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="px-5 py-3 rounded-md bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-[0_15px_40px_-10px_rgba(139,92,246,0.65)] transition-colors">Explore Features</a>
            <a href="/test" className="px-5 py-3 rounded-md bg-slate-800/80 hover:bg-slate-700/70 text-slate-200 border border-slate-700">Check System</a>
          </div>
        </div>

        {/* Spline container */}
        <div className="relative h-[520px] rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur overflow-hidden shadow-[0_30px_120px_-30px_rgba(59,130,246,0.45)]">
          <Spline scene="https://prod.spline.design/lhyZZ6aTNbQrJghE/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Glass overlay edges */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 rounded-2xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/50 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
