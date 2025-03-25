import "./addMovie.css"

import movieServices from "../../services/movieServices.js";

import { useNavigate, useParams } from "react-router";

import { useEffect, useState } from "react";

export default function AddContent(){
    const navigate = useNavigate()

    const { id } = useParams();

    const [movie, setMovie] = useState({ title: "", poster: "", genre: "", director: "", year: "", time: "", description: "", rating: "" })

    if(id){
      useEffect( () => {
        movieServices.getOne(id, 'movies')  
        .then(setMovie)
      }, [])
    }

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.defaultValue });
      };

      const submitAction = async (formData) => {
        const movieData = Object.fromEntries(formData);
        
        await movieServices.addMovie(movieData, 'movies');

        navigate('/movies');
      };
      
    return (
        <div className="collection-container">
        <h1 className="collection-title">{id ? 'Edit your favourite movie' : 'Add your favourite movie'}</h1>
        <p className="collection-subtitle">{id ? '👀 I`m watching… No mistakes, please! 👀' : 'Sure it will be a good one.'}</p>
  
        <form className="collection-form" action={submitAction}>
  <div className="form-group">
    <label htmlFor="title">Movie Title</label>
    <input
      type="text"
      id="title"
      name="title"
      placeholder="Enter movie title"
      defaultValue={movie.title}
      onChange={handleChange}
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
      onChange={handleChange}
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
      onChange={handleChange}
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
      onChange={handleChange}
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
      onChange={handleChange}
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
      onChange={handleChange}
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
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="genre">Rating</label>
    <input
      type="number"
      id="rating"
      name="rating"
      placeholder="Enter rating"
      defaultValue={movie.rating}
      onChange={handleChange}
      required
    />
  </div>

  <button type="submit" className="submit-btn">Add Movie</button>
</form>
      </div>
    )
}