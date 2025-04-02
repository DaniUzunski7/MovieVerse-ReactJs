import { FaUserCircle } from "react-icons/fa"
import { useParams } from "react-router"
import { useGetUser } from "../../../api/authAPI";

export default function UserDetails({
    onClose
}){
    const {id} = useParams();

    const {user} = useGetUser();
        
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30 z-20">
            <div onClick={onClose} className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/30">
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-96 relative flex flex-col items-center">
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white">
                ✖
            </button>
            <FaUserCircle className="text-yellow-400 text-6xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">{user?.userName}</h3>
            <p className="text-gray-300">Email: {user?.email}</p>
            <p className="text-gray-300">Joined: {new Date(user?._createdOn).toLocaleDateString()}</p>
        </div>
        </div>
    </div>
    )
}