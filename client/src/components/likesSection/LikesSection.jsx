import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function LikesSection({
   isLiked,
   onLike,
   likesCount
}) {   
    
  return (
    <div className="flex justify-start mt-6">
     <button
      onClick={onLike}
      disabled={isLiked}
      className={`relative flex items-center gap-2 px-5 py-2 rounded-full font-medium text-gray-900 transition-all duration-300
        ${isLiked ? "bg-yellow-500" : "bg-yellow-400 hover:bg-yellow-500"}
        ${isLiked ? "scale-105" : "hover:scale-105"}
        disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {isLiked ? (
        <FaHeart className="text-2xl text-gray-900 transition-all duration-300" />
      ) : (
        <FaRegHeart className="text-2xl text-gray-900 transition-all duration-300" />
      )}
      <span className="text-gray-900 font-semibold">{likesCount}</span>
    </button>
  
  </div>
  
  );
}
