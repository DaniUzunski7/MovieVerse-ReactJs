import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function useAuth() {
    const { accessToken } = useContext(UserContext);

   return {
    accessToken,

   }
}