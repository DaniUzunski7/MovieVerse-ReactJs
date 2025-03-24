import { useEffect, useState } from "react";
import movieServices from "../../services/movieServices";
import MovieCard from "../MovieCard";
import NoContent from "../NoContent";

export default function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    movieServices.getAll("upcoming").then(setMovies).catch(setError);
  }, []);
  console.log(movies, error);

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Upcoming Movies of {currentYear}
      </h1>

      {movies.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie._id} {...movie} error={error} path="upcoming"/>
          ))}
        </div>
      ) : (
        <NoContent />
      )}
    </div>
  );
}
