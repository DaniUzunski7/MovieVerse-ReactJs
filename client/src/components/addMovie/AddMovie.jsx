import "./addMovie.css"

import { useNavigate} from "react-router";

import { useCreateMovie} from "../../api/moviesAPI.js";
import { showSuccessToast } from "../toasts/ShowToast.jsx";

export default function AddContent(){
    const navigate = useNavigate();

    const { add } = useCreateMovie();

      const submitAction = async (formData) => {
        const movieData = Object.fromEntries(formData);
      
        await add({...movieData});

        showSuccessToast('Movie was added successfully!')
        navigate(`/movies`);
      };
      
    return (
        <div className="collection-container">
        <h1 className="collection-title">Add your favourite movie</h1>
        <p className="collection-subtitle">Sure it will be a good one.</p>
  
        <form className="collection-form" action={submitAction}>
  <div className="form-group">
    <label htmlFor="title">Movie Title</label>
    <input
      type="text"
      id="title"
      name="title"
      placeholder="Enter movie title"
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
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea
      id="description"
      name="description"
      placeholder="Enter movie description"
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
      required
    />
  </div>

  <button type="submit" className="submit-btn">Add Movie</button>
</form>
      </div>
    )
}