import { useContext, useState, useEffect } from "react";
import request from "../utils/request"
import { UserContext } from "../context/userContext";
import useAuth from "../hooks/useAuth";


const baseUrl =  'http://localhost:3030/data/movie-verse'

export const useCreateMovie = () => {
    const { options } = useAuth();

    const add = (movieData) => {
        request.post(baseUrl, movieData, options)
    }

    return {
        add
    }
}

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect( () => {
        request.get(baseUrl)
            .then(setMovies)
    }, [])

    return {
        movies
    };
}

export const useGetMovie = (id) => {
    const [movie, setMovie] = useState({});
    
    useEffect( () => {
        request.get(`${baseUrl}/${id}`)
            .then(setMovie);
    }, [id])
    
    return {
        movie
    }
}

export const useEditMovie = () => {
    const { options } = useAuth();

    const edit = (id, movieData) => {
        return request.put(`${baseUrl}/${id}`, {...movieData, _id: id}, options);
    }

    return {
        edit
    }
}

export const useDeleteMovie = () => {
    const { options } = useAuth();

    const deleteMovie = (id) => {
        request.delete(`${baseUrl}/${id}`, null, options)
    }   

    return {
        deleteMovie
    }
}