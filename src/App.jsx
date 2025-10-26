// src/App.jsx
import './index.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Games from './components/sections/Games'
import Tournaments from './components/sections/Tournaments'
import Streamers from './components/sections/Streamers'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <Games />
      <Tournaments />
      <Streamers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App