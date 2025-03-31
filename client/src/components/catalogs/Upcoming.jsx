import { useEffect, useState } from "react";

import movieServices from "../../services/movieServices";

export default function Upcoming() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieServices.getAll("upcoming").then(setMovies);
  }, []);

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-semibold text-yellow-400 text-center mb-6">
        Upcoming Movies
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-xl text-yellow-400 mt-3 font-semibold text-center">
              {movie.title}
            </h2>
            <p className="text-gray-400 text-center mt-1">
              Expected: {movie.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
