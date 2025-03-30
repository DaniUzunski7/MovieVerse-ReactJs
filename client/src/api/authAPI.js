import request from "../utils/request"

const baseUrl =  'http://localhost:3030/users'

export const useLogin = () => {
    const login = (email, password) => {
       const data = request.post(`${baseUrl}/login`, {email, password});

       return data;
    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (email, userName, password) => {
        const data = request.post(`${baseUrl}/register`, {email, userName, password});

        return data;
    }

    return {
        register
    }
}