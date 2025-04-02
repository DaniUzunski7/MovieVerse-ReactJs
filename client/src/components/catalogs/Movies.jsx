import { Link } from "react-router";
import { useMovies, useMoviesCount } from "../../api/moviesAPI";

import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

import Pagination from "../pagination/Pagination";
import MovieCard from "../movieDetails/movieCard/MovieCard";
import NoContent from "../noContent/NoContent";

export default function Movies() {
  const [page, setPage] = useState(1);

  const user = useContext(UserContext);
  const { movies } = useMovies(page);
  const { totalMovies } = useMoviesCount();

  const totalPages = Math.ceil(totalMovies / 6);

  return (
    <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Movies</h1>

      {!user._id ? null : (
        <div className="mb-8 text-center">
          <Link
            to="/movies/add"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300"
          >
            Add your favourite movie
          </Link>
        </div>
      )}

      {movies ? (
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie._id} {...movie} path="movies" />
          ))}
        </div>
      ) : (
        <NoContent />
      )}

      {movies ? (
        <Pagination
          totalPages={totalPages}
          page={page}
          onPageChange={setPage}
        />
      ) : null}

      {totalMovies < 1 && <NoContent />}

    </div>

  );
}
