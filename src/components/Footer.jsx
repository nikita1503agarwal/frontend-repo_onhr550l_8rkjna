function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Cybernetic Interface. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <span className="text-slate-700">•</span>
            <a href="/test" className="text-slate-300 hover:text-white">System Test</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
