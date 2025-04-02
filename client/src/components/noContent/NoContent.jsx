import { Link } from "react-router"; 
import { FaFilm } from "react-icons/fa";

export default function NoContent({
    error
}){
    return (
        <div className="flex flex-col items-center justify-center py-40 text-center text-gray-300">
          <FaFilm className="text-8xl text-yellow-400 mb-6" />
          <h2 className="text-4xl font-semibold">No movies available</h2>
          <p className="text-gray-400 mt-4 text-xl max-w-xl mx-auto">Be the first to add a new movie to the collection.</p>
          {error && (
            <Link
              to={"/"}
              className="mt-4 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition"
            >
              {error || "Add a Movie"}
            </Link>
          )}
        </div>
      );
}