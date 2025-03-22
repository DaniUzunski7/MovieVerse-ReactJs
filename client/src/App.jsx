import './App.css'

import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Home from './components/Home'
import HeroSection from './components/HeroSection'
import Upcoming from './components/Upcoming'

import {Routes, Route} from 'react-router'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-900 text-yellow-400">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<h1>Works!</h1>} />
        <Route path="/tv-series" element={<h1>Works!</h1>} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/highest-rated" element={<h1>Works!</h1>} />
      </Routes>

      <Footer />
      </div>
    </>
  )
}

export default App
