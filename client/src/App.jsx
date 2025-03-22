import './App.css'
import Header from './components/Header'

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
    </>
  )
}

export default App
