import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import movieServices from '../services/movieServices';
import Rating from './rating/Rating';

export default function MovieDetails(){
    const {id} = useParams();

    const [movie, setMovie] = useState({});
    
    useEffect( () => {
        movieServices.getOne(id)
            .then(setMovie)
    }, [id]);

    return (
        <div className="container mx-auto py-10 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Movie Poster */}
        <div className="lg:w-1/3">
          <img src={movie.poster} alt={movie.title} className="w-full rounded-lg shadow-lg" />
        </div>
        
        {/* Movie Details */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-semibold text-yellow-400">{movie.title}</h1>
          <p className="text-lg text-gray-300 mt-2">{movie.description}</p>
          <p className="text-gray-400 mt-4">Released on: {movie.year}</p>
          <p className="text-gray-400 mt-2">Director: {movie.director}</p>
          <p className="text-gray-400 mt-2">Genre: {movie.genre}</p>
          <p className="text-gray-400 mt-2">Duration: {movie.time} min</p>

          {/* Rating Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-200">Rate this Movie</h3>
            <div className="flex mt-2">
              <Rating rating={movie.rating}/>
            </div>
            <p className="mt-2 text-gray-400">Your Rating: {movie.rating} / 10</p>
          </div>
        </div>
      </div>
    </div>
    )
}