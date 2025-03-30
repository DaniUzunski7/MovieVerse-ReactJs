import { useContext } from "react";
import { UserContext } from "../context/userContext";

import request from "../utils/request";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const login = (email, password) => {
    const data = request.post(`${baseUrl}/login`, { email, password });

    return data;
  };

  return {
    login,
  };
};

export const useRegister = () => {
  const register = (email, userName, password) => {
    const data = request.post(`${baseUrl}/register`, {
      email,
      userName,
      password,
    });

    return data;
  };

  return {
    register,
  };
};

export const useLogout = () => {
  const { accessToken } = useContext(UserContext);

  const options = {
    headers: {
      "X-Authorization": accessToken,
    },
  };

  const logout = () => request.get(`${baseUrl}/logout`, null, options);

  return {
    logout,
  };
};
