import request from "../utils/request"

const baseUrl =  'http://localhost:3030/jsonstore/upcoming'

async function getAll(){
    const response = await request.get(baseUrl);    

    return Object.values(response);
}

export default {
    getAll,
}