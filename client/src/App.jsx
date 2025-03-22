import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'

import {Routes, Route} from 'react-router'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Works!</h1>} />
        <Route path="/movies" element={<h1>Works!</h1>} />
        <Route path="/tv-series" element={<h1>Works!</h1>} />
        <Route path="/upcoming" element={<h1>Works!</h1>} />
        <Route path="/highest-rated" element={<h1>Works!</h1>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
