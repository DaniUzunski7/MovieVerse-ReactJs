import { Navigate } from "react-router";
import { useLogout } from "../../../api/authAPI"
import { showSuccessToast } from "../../toasts/ShowToast";


export default function Logout(){
    const {isLoggedOut} = useLogout();
    showSuccessToast('Logout successful!')

    return isLoggedOut
            ? <Navigate to="/"/>
            : null
}