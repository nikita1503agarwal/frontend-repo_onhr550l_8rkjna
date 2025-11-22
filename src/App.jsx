import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
