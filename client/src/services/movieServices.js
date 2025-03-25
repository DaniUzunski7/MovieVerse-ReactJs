import request from "../utils/request"


const baseUrl =  'http://localhost:3030/jsonstore'

async function addMovie(movieData, dataPath){
    return request.post(`${baseUrl}/${dataPath}`, movieData)
}

async function getAll(dataPath){
    
    const response = await request.get(`${baseUrl}/${dataPath}`);
    
    return Object.values(response)
}

async function getOne(id, dataPath) {
    const response = await request.get(`${baseUrl}/${dataPath}/${id}`)
    
    return response;
}

async function deleteMovie(dataPath, id) {
    return await request.delete(`${baseUrl}/${dataPath}/${id}`);
}

export default {
    addMovie,
    getAll,
    getOne,
    deleteMovie
}