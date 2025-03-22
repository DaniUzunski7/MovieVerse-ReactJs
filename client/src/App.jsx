import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'

import {Routes, Route} from 'react-router'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-900 text-yellow-400">
      <Header />

      <HeroSection />
      <Routes>
        <Route path="/movies" element={<h1>Works!</h1>} />
        <Route path="/tv-series" element={<h1>Works!</h1>} />
        <Route path="/upcoming" element={<h1>Works!</h1>} />
        <Route path="/highest-rated" element={<h1>Works!</h1>} />
      </Routes>

      <Footer />
      </div>
    </>
  )
}

export default App
