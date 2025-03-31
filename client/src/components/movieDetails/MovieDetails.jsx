import {useContext } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";

import movieServices from "../../services/movieServices";
import ShowRating from "../rating/ShowRating";
import LikesSection from "../likesSection/LikesSection";

import { UserContext } from "../../context/userContext";
import { useDeleteMovie, useGetMovie } from "../../api/moviesAPI";

export default function MovieDetails() {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const { path, id } = useParams();

  const { movie } = useGetMovie(id);

  const { deleteMovie } = useDeleteMovie()
    
  const deleteMovieHandler = async () => {
    const confirmed = confirm('Are you sure you want to delete this movie? This action cannot be undone.')

    if (!confirmed){
      return
    }

    await deleteMovie(id);

    navigate('/movies');
  }

  const likeHandler = (newLikesCount) => {

    setMovie(state => ( {...state, likes: newLikesCount} ));
    
    movieServices.editMovie('movies', id, {...movie, likes: newLikesCount});
  }

  return (
    <div className=" relative container mx-auto py-7 px-6">
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="lg:w-1/3">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-2/3">
          <h1 className="text-4xl font-semibold text-yellow-400">
            {movie.title}
          </h1>
          <p className="text-lg text-gray-300 mt-2">{movie.description}</p>
          <p className="text-gray-400 mt-4">
            {path !== 'upcomming'
              ? 'Released: '
              : 'Expected release date: '
            } 
            {movie.year}
            </p>
          <p className="text-gray-400 mt-2">Director: {movie.director}</p>
          <p className="text-gray-400 mt-2">Genre: {movie.genre}</p>
          <p className="text-gray-400 mt-2">Duration: {movie.time} min</p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-200">
              {path === 'movies'
                ? 'Do you agree with the rating?'
                : 'Are you excited to see it?'
              }
            </h3>
           {path === 'movies'
              ? <ShowRating rating={movie.rating}/>
              : null
           }
           
            </div>

          {user && <LikesSection user={user.email} likes={movie.likes} onLike={likeHandler}/>}

          {path === "upcoming" ? (
            ""
          ) : (
            <div className="flex flex-col lg:flex-row gap-3 mt-8 lg:absolute lg:bottom-15 lg:right-8 lg:space-x-4 w-full lg:w-auto">
              <Link to={`/movies/${id}/edit`} className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 w-full lg:w-auto"
              >
                <FaEdit />
                Edit
              </Link>
              <button className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-red-700 transition-all duration-300 w-full lg:w-auto"
                onClick={deleteMovieHandler}
              >
                <FaTrash />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
