import { Link } from "react-router";

export default function MovieCard({
    _id,
    title,
    poster,
    year,
}){
    return (
        <div key={_id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="relative group">
              <img src={poster} alt={title} className="w-full items-center h-90 object-cover rounded-t-lg" />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <Link
                    to={`/movies/${_id}`}
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-200">{title}</h2>
              <p className="text-gray-400 mt-2">Release Date: {year}</p>
            </div>
          </div>
    )
}