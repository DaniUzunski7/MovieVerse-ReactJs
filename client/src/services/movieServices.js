const baseUrl =  'http://localhost:3030/jsonstore/movies'

async function addMovie(movieData){
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(movieData)
    })

    const result = await response.json()

    return result
}

export default {
    addMovie
}