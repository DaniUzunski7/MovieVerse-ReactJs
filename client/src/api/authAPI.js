import { useContext, useEffect } from "react";
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
  const { accessToken, logoutHandler } = useContext(UserContext);

  useEffect( () => {
    if(!accessToken){
        return
    }

      const options = {
          headers: {
              "X-Authorization": accessToken,
            },
        };
        
        request.get(`${baseUrl}/logout`, null, options)
            .then(logoutHandler)
    }, [accessToken, logoutHandler]);

  return {
    isLoggedOut: !!accessToken,
  };
};
