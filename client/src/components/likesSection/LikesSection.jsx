import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function LikesSection() {
  return (
    <>
      <button
        className={`relative top-7 mb-7 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-500 ${
          "liked" ? "bg-yellow-500" : "bg-yellow-400"
        }`}
      >
        <FaThumbsUp className="inline-block mr-2" />
        {"liked" ? "Liked" : "Like"}
        <span className={`relative ml-2`}>10</span>
      </button>
      <button
        className={`relative top-7 mb-7 ml-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full transition-all duration-300 hover:bg-yellow-500 ${
          "disliked" ? "bg-yellow-500" : "bg-yellow-400"
        }`}
      >
        <FaThumbsDown className="inline-block mr-2" />
        {"liked" ? "Disliked" : "Dislike"}
        <span className={`relative ml-2`}>10</span>
      </button>
    </>
  );
}
