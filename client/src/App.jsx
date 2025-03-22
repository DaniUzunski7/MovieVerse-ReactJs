import './App.css'

import {Routes, Route} from 'react-router'

function App() {

  return (
    <>

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
