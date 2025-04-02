import "./editMovie.css";

import { Navigate, useNavigate, useParams } from "react-router";

import { useEditMovie, useGetMovie } from "../../api/moviesAPI";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { showSuccessToast } from "../toasts/ShowToast";
import Loading from "../loading/Loading";

export default function EditMovie() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const user = useContext(UserContext);
  
  const { id } = useParams();
  const { edit } = useEditMovie();
  const { movie } = useGetMovie(id);

  useEffect( () => {
    if (movie && movie._ownerId){
      setIsLoading(false);
    }
  }, [movie])

  if (isLoading){
    return <Loading />
  }
    const isOwner = user._id === movie._ownerId;
    
    if(!isOwner){
      return <Navigate to="/movies" />
    }

  const submitAction = async (formData) => {
    const movieData = Object.fromEntries(formData);

    await edit(id, {...movieData, likes: movie.likes});

    showSuccessToast('Movie was edited successfully!')
    navigate(`/movies/${id}/details`);
  };

  return (
    <div className="collection-container">
      <h1 className="collection-title">Edit your favourite movie</h1>
      <p className="collection-subtitle">
        👀 I`m watching… No mistakes, please! 👀
      </p>

      <form className="collection-form" action={submitAction}>
        <div className="form-group">
          <label htmlFor="title">Movie Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter movie title"
            defaultValue={movie.title}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="poster">Movie Poster URL</label>
          <input
            type="text"
            id="poster"
            name="poster"
            placeholder="Enter poster URL"
            defaultValue={movie.poster}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Enter genre"
            defaultValue={movie.genre}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="director">Director</label>
          <input
            type="text"
            id="director"
            name="director"
            placeholder="Enter director"
            defaultValue={movie.director}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="Enter release year"
            defaultValue={movie.year}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Duration (minutes)</label>
          <input
            type="number"
            id="time"
            name="time"
            placeholder="Enter movie time"
            defaultValue={movie.time}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter movie description"
            defaultValue={movie.description}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Rating</label>
          <input
            type="text"
            id="rating"
            name="rating"
            placeholder="Enter rating"
            defaultValue={movie.rating}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Edit Movie
        </button>
      </form>
    </div>
  );
}
