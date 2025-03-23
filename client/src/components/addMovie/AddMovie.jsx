import "./addMovie.css"

import movieServices from "../../services/movieServices.js";

import { useNavigate } from "react-router";

import { useState } from "react";

export default function AddContent(){
    const navigate = useNavigate()

    const [entries, setEntries] = useState([]);
    const [formData, setFormData] = useState({ title: "", poster: "", genre: "", director: "", year: "", time: "", description: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const submitAction = async (formData) => {
        const movieData = Object.fromEntries(formData);
        
        await movieServices.addMovie(movieData);

        navigate('/movies');
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
      value={formData.title}
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
      value={formData.poster}
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
      value={formData.genre}
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
      value={formData.director}
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
      value={formData.year}
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
      value={formData.time}
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
      value={formData.description}
      onChange={handleChange}
      required
    />
  </div>

  <button type="submit" className="submit-btn">Add Movie</button>
</form>
      </div>
    )
}