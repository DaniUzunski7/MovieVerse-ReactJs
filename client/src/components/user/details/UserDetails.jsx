import { useEffect } from "react"
import { FaUserCircle } from "react-icons/fa"
import { useParams } from "react-router"

export default function UserDetails(){
    const {id} = useParams()
    
    useEffect( () => {
        
    }, [id])
    
    return (
        <div className="container mx-auto py-10 px-6 text-yellow-400">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto text-center">
        <div className="flex justify-center mb-4">
            <FaUserCircle className="text-gray-500 w-32 h-32" />
        </div>
        <h2 className="text-3xl font-bold">{'user.username'}</h2>
        <p className="text-gray-300">{'user.email'}</p>
        <p className="text-gray-400 mt-2">Joined: {}</p>
        <p className="text-gray-400 mt-2">Liked Movies: {'user.likedMovies?.length' || 0}</p>
      </div>
    </div>
    )
}