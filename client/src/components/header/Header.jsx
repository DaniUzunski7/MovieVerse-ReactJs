import { FaSearch, FaFilm, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";


export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-2">
        <FaFilm className="text-3xl text-yellow-400" />
        <span className="text-2xl font-bold text-yellow-400">MovieVerse</span>
      </div>
      <nav className="hidden md:flex gap-6 text-lg">
        <Link to="/movies" className="hover:text-yellow-300">
          Movies
        </Link>
        <Link to="/tv-series" className="hover:text-yellow-300">
          TV Series
        </Link>
        <Link to="/upcoming" className="hover:text-yellow-300">
          Upcoming
        </Link>
        <Link to="/highest" className="hover:text-yellow-300">
          Trending
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <FaSearch className="absolute right-3 top-3 text-yellow-400" />
        </div>
        <Link
          to="/login"
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-300"
        >
          Log In
        </Link>
        <Link 
          to="/register"
          className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600"
        >
          Register
        </Link>
      </div>
    </header>
  );
}
