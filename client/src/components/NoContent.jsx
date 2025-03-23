import { Link } from "react-router"; 
import { FaFilm } from "react-icons/fa";

export default function NoContent({
    error
}){
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center text-gray-300">
          <FaFilm className="text-6xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold">No movies available</h2>
          <p className="text-gray-400 mt-2">Be the first to add a new movie to the collection.</p>
          {error && (
            <Link
              to={"/"}
              className="mt-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition"
            >
              {error || "Add a Movie"}
            </Link>
          )}
        </div>
      );
}