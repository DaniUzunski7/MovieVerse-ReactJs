import './App.css'

import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import HighestRated from './components/HighestRated'
import Home from './components/Home'
import Movies from './components/Movies'
import TvSeries from './components/TvSeries'
import Upcoming from './components/Upcoming'

import {Routes, Route} from 'react-router'

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-900 text-yellow-400">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/highest-rated" element={<HighestRated />} />
      </Routes>

      <Footer />
      </div>
    </>
  )
}

export default App
