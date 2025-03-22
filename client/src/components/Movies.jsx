import { Link } from "react-router";
import Pagination from "./Pagination";

export default function Movies() {
    const movies = [
        { id: 1, title: "Inception", releaseDate: "2010-07-16", posterUrl: "https://source.unsplash.com/400x600/?inception,movie" },
        { id: 2, title: "Interstellar", releaseDate: "2014-11-07", posterUrl: "https://source.unsplash.com/400x600/?interstellar,movie" },
        { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18", posterUrl: "https://wallpaperswide.com/download/the_dark_knight_movie-wallpaper-1920x1200.jpg" }
        // Add more movies here
      ];
  
    return (
    <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Movies</h1>

      <div className="mb-8 text-center">
        <Link
          to="/add-content"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300"
        >
          Add your favourite movie
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative group">
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-72 object-cover rounded-t-lg" />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Link
                    to={`/movies/${movie.id}`}
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-200">{movie.title}</h2>
              <p className="text-gray-400 mt-2">Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

        <Pagination />

 </div>
  );
}
