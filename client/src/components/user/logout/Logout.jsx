import { Navigate } from "react-router";
import { useLogout } from "../../../api/authAPI"
import { showErrorToast, showSuccessToast } from "../../toasts/ShowToast";


export default function Logout(){
    const {isLoggedOut} = useLogout();
    
    return isLoggedOut
        ? <Navigate to="/" />
        : showErrorToast('Can not logout!')
}