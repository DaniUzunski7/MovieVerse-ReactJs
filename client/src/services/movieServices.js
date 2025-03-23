import request from "../utils/request"


const baseUrl =  'http://localhost:3030/jsonstore/movies'

async function addMovie(movieData){
    return request.post(baseUrl, movieData)
}

async function getAll(){
    const response = await request.get(baseUrl);

    return Object.values(response)
}

export default {
    addMovie,
    getAll
}