import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaEdit, FaTrash, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import movieServices from "../services/movieServices";
import Rating from "./rating/Rating";

export default function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    movieServices.getOne(id).then(setMovie);
  }, [id]);

  return (
    <div className=" relative container mx-auto py-10 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Movie Poster */}
        <div className="lg:w-1/3">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Movie Details */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-semibold text-yellow-400">
            {movie.title}
          </h1>
          <p className="text-lg text-gray-300 mt-2">{movie.description}</p>
          <p className="text-gray-400 mt-4">Released on: {movie.year}</p>
          <p className="text-gray-400 mt-2">Director: {movie.director}</p>
          <p className="text-gray-400 mt-2">Genre: {movie.genre}</p>
          <p className="text-gray-400 mt-2">Duration: {movie.time} min</p>

          {/* Rating Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-200">
              Rate this Movie
            </h3>
            <div className="flex mt-2">
              <Rating rating={movie.rating} />
            </div>
            <p className="mt-2 text-gray-400">
              Your Rating: {movie.rating} / 10
            </p>
          </div>

          <button
            className={`relative top-7 mb-7 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-500 ${
              "liked" ? "bg-yellow-500" : "bg-yellow-400"
            }`}
          >
            <FaThumbsUp className="inline-block mr-2" />
            {"liked" ? "Liked" : "Like"}
            <span className={`relative ml-2`}>10</span>
          </button>
          <button
            className={`relative top-7 mb-7 ml-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-500 ${
              "disliked" ? "bg-yellow-500" : "bg-yellow-400"
            }`}
          >
            <FaThumbsDown className="inline-block mr-2" />
            {"liked" ? "Disliked" : "Dislike"}
            <span className={`relative ml-2`}>10</span>
          </button>

          {/* Edit/Delete buttons */}
          <div className="flex flex-col lg:flex-row gap-3 mt-8 lg:absolute lg:bottom-15 lg:right-8 lg:space-x-4 w-full lg:w-auto">
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 w-full lg:w-auto">
              <FaEdit />
              Edit
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-700 transition-all duration-300 w-full lg:w-auto">
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
