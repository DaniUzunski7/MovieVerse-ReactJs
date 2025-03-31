import { useContext, useState, useEffect } from "react";
import request from "../utils/request"
import { UserContext } from "../context/userContext";


const baseUrl =  'http://localhost:3030/data/movie-verse'

 function getOne(id, dataPath) {    
    return request.get(`${baseUrl}/${dataPath}/${id}`);
}

function deleteMovie(dataPath, id) {
    return request.delete(`${baseUrl}/${dataPath}/${id}`);
}

function editMovie(dataPath, id, movieData){
    return request.put(`${baseUrl}/${dataPath}/${id}`, {...movieData, _id: id});
}

export default {
    getOne,
    deleteMovie,
    editMovie
}

export const useCreateMovie = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }

    const add = (movieData) => {
        request.post(baseUrl, movieData, options)
    }

    return {
        add
    }
}

export const useMovies = () => {
    const [movies, setMovies] = useState();
    
    useEffect( () => {
        request.get(baseUrl)
            .then(setMovies)
    }, [])

    return {
        movies
    };
}