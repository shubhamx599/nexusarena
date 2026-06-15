// src/App.jsx
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages / Sections
import Home from './pages/Home'
import Features from './components/sections/Features'
import Games from './components/sections/Games'
import Tournaments from './components/sections/Tournaments'
import Streamers from './components/sections/Streamers'
import Contact from './components/sections/Contact'

// UI Components
import CustomCursor from './components/ui/CustomCursor'
import ScrollProgress from './components/ui/ScrollProgress'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <ScrollToTop />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/games" element={<Games />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/streamers" element={<Streamers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App