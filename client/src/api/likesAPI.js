import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseUrl =  'http://localhost:3030/data/likes';

export const useLike = () => {
    const { options } = useAuth();

    const like = (movieId) => {
        const likeData = {
            movieId
        }
         
        return request.post(baseUrl, likeData, options)
    }

    return {
        like
    }
}

export const useGetLikes = (movieId) => {
    const [likesCount, setLikesCount] = useState([]);

    useEffect( () => {

        const searchParams = new URLSearchParams({
            where: `movieId="${movieId}"`
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setLikesCount);
    }, [movieId])

    return {
        likesCount,
        setLikesCount
    }
}