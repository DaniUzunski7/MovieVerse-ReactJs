import { FaStar, FaRegStar } from "react-icons/fa";

export default function HalfStar(){ 
    return (
        <div className="relative w-9 h-9">
       <FaStar
        className="absolute left-0 top-0 w-full h-full text-yellow-400"
        style={{ clipPath: 'inset(0 50% 0 0)' }} 
      />
      <FaRegStar
        className="absolute left-0 top-0 w-full h-full text-gray-500"
        style={{ clipPath: 'inset(0 0 0 50%)' }} 
      />
    </div>
    )
}