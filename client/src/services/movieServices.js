import request from "../utils/request"


const baseUrl =  'http://localhost:3030/jsonstore/movies'

async function addMovie(movieData){
    return request.post(baseUrl, movieData)
}

async function getAll(){
    const response = await request.get(baseUrl);

    return Object.values(response)
}

async function getOne(id) {
    const response = await request.get(`${baseUrl}/${id}`)
    
    return response;
}

export default {
    addMovie,
    getAll,
    getOne
}