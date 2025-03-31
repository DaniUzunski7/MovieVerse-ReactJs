import { useContext } from "react";
import request from "../utils/request"
import { UserContext } from "../context/userContext";


const baseUrl =  'http://localhost:3030/data/movie-verse'

async function getAll(dataPath){
    
    const response = await request.get(`${baseUrl}/${dataPath}`);
    
    return Object.values(response)
}

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
    getAll,
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