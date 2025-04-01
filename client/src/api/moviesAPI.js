import {useState, useEffect } from "react";
import request from "../utils/request"
import useAuth from "../hooks/useAuth";


const baseUrl =  'http://localhost:3030/data/movies'

export const useCreateMovie = () => {
    const { options } = useAuth();

    const add = (movieData) => {
        request.post(baseUrl, movieData, options)
    }

    return {
        add
    }
}

export const useMovies = (page) => {
    const [movies, setMovies] = useState([]);

        const searchParams = new URLSearchParams({
            offset: (page - 1) * 6,
            pageSize: 6
        })
    
        useEffect( () => {
            request.get(`${baseUrl}?${searchParams}`)
                .then(setMovies)
        }, [page])

    return {
        movies
    };
}

export const useMoviesCount = () => {
    const [totalMovies, setTotalMovies] = useState();

    useEffect( () => {
        request.get(`${baseUrl}?select=_id`)
            .then(response => {
                setTotalMovies(Object.keys(response).length)
            })
    }, []);

    return {
        totalMovies
    }
}

export const useLatest = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 4
        })

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setMovies)
    }, []);

    return {
        movies
    }
}

export const useTopRated = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        const searchParams = new URLSearchParams({
            sortBy: 'rating desc'
        });

        request.get(`${baseUrl}?${searchParams}`)
            .then(setMovies)
    }, []);

    return {
        movies
    }
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