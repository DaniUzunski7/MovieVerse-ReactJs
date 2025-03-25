import request from "../utils/request"


const baseUrl =  'http://localhost:3030/jsonstore'

function addMovie(movieData, dataPath){
    return request.post(`${baseUrl}/${dataPath}`, movieData)
}

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
    addMovie,
    getAll,
    getOne,
    deleteMovie,
    editMovie
}