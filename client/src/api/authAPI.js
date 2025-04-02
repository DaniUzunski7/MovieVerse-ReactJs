import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import request from "../utils/request";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const login = (email, password) => {
    const user = request.post(`${baseUrl}/login`, { email, password });

    return user;
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
  const { accessToken, logoutHandler } = useContext(UserContext);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    request.get(`${baseUrl}/logout`, null)
      .then(logoutHandler);

  }, [accessToken, logoutHandler]);

  return {
    isLoggedOut: !!accessToken,
  };
};

export const useGetUser = () => {
  const { accessToken } = useContext(UserContext);

  const [user, setUser] = useState({});

  useEffect( () => {
    request.get(`${baseUrl}/me`)
      .then(setUser);
  }, [accessToken])

  return {
    user
  };
};
