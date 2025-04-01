import { Navigate } from "react-router";
import { useLogout } from "../../../api/authAPI"


export default function Logout(){
    const {isLoggedOut} = useLogout();

    return isLoggedOut
            ? <Navigate to="/"/>
            : null
}