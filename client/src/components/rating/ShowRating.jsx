import Rating from "./Rating";

export default function ShowRating({
    rating
}){
    return (
        <>
        <div className="flex mt-2">
        <Rating rating={rating} />
      </div>
      <p className="mt-2 text-gray-400">
        Rating: {rating} / 10
      </p>
        </>
    )
}