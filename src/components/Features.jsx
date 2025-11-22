import { Cpu, Zap, Radar, Shield } from 'lucide-react'

const features = [
  {
    title: 'Neon Performance',
    desc: 'Optimized for silky smooth motion and instant feedback.',
    icon: Zap,
  },
  {
    title: 'Cybernetic Core',
    desc: 'A tech stack forged in the future: React, FastAPI, MongoDB.',
    icon: Cpu,
  },
  {
    title: 'Adaptive Sensors',
    desc: 'Responsive across devices with precision breakpoints.',
    icon: Radar,
  },
  {
    title: 'Hardened Shield',
    desc: 'Security-first patterns and production-ready structure.',
    icon: Shield,
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_top_left,rgba(139,92,246,0.15),transparent_60%),radial-gradient(600px_circle_at_bottom_right,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered Features</h2>
          <p className="mt-3 text-slate-300">Distinct lines, clean geometry, and purposeful motion.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur hover:border-violet-500/40 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/15 text-violet-300 ring-1 ring-violet-500/30 group-hover:bg-violet-600/25">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
