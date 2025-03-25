import { useState } from "react";
import { Link } from "react-router";

import { FaSearch, FaFilm, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-4 px-4 md:px-6 flex items-center justify-between shadow-lg w-full">

      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <FaFilm className="text-3xl text-yellow-400" />
          <span className="hidden md:block text-2xl font-bold text-yellow-400">MovieVerse</span>
        </div>
      </Link>

      <nav className="hidden md:flex gap-6 text-lg">
        <Link to="/movies" className="hover:text-yellow-300">Movies</Link>
        <Link to="/upcoming" className="hover:text-yellow-300">Upcoming</Link>
        <Link to="/highest-rated" className="hover:text-yellow-300">Highest Rated</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
      </nav>

      <button 
        className="md:hidden text-yellow-400 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <Link to="/movies" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link to="/upcoming" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Upcoming</Link>
          <Link to="/highest-rated" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>Highest Rated</Link>
          <Link to="/about" className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 w-40 md:w-56"
          />
          <FaSearch className="absolute right-3 top-3 text-yellow-400" />
        </div>

        <Link to="/login" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-300">
          Log In
        </Link>
        <Link to="/register" className=" hidden md:block bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600">
          Register
        </Link>
      </div>
    </header>
  );
}
