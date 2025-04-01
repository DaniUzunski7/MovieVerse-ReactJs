import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    loginHandler: () => null,
    logoutHandler: () => null,
});

export default function UserProvider({
    children
}){
    const [user, setUser] = usePersistedState('auth', {});

    const loginHandler = (userData) => {
      setUser(userData);
    };
  
    const logoutHandler = () => {
      setUser({});
    }

    return (
        <UserContext.Provider value={{...user, loginHandler, logoutHandler}}>
            {children}
        </UserContext.Provider>
    )
}