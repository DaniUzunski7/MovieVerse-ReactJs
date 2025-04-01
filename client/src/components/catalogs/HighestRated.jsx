import { useTopRated } from "../../api/moviesAPI";

export default function HighestRated() {

    const {movies} = useTopRated();

    return (
    <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Top 10 Highest Rated Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-200 mb-8"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-gray-300 mt-2">Rating: {movie.rating}</p>
            </div>
          </div>  
        ))}
      </div>
    </div>
  );
}
