import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-2xl bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border border-slate-800/60 shadow-[0_10px_60px_-15px_rgba(128,90,213,0.35)]">
          <div className="flex items-center gap-3 pl-4">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 ring-2 ring-violet-400/30 shadow-[0_0_30px_rgba(124,58,237,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Cybernetic</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300 pr-4">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="/test" className="px-3 py-1.5 rounded-md bg-violet-600/90 hover:bg-violet-500 text-white font-medium shadow-[0_10px_30px_rgba(139,92,246,0.45)] transition-colors">Test Backend</a>
          </nav>
          <button className="md:hidden p-3 text-slate-300 hover:text-white">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
