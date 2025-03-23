import { Link } from "react-router";
import { useState, useEffect } from "react";

import Pagination from "../Pagination";
import movieServices from "../../services/movieServices";
import MovieCard from "../MovieCard";
import NoContent from "../NoContent";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState();

    useEffect( () => {
      movieServices.getAll()
        .then(setMovies)
        .catch(setError);
    }, [])
  
    return (
    <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Movies</h1>

      <div className="mb-8 text-center">
        <Link
          to="/movies/add"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300"
        >
          Add your favourite movie
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {movies.length > 0
          ? movies.map(movie => <MovieCard key={movie._id} {...movie} error={error}/>)
          : <NoContent />
        }
        
      </div>

        <Pagination />

 </div>
  );
}
