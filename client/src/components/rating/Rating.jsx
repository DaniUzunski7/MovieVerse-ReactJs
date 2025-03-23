import { FaStar, FaRegStar } from "react-icons/fa"; 

import HalfStar from "./HalfStar";

export default function Rating({
    rating
}){
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.1 ? 1 : 0;
    const emptyStars = 10 - fullStars - halfStar;

    const starsRender = () => {    
        const stars = [];

        for(let i = 1; i <= fullStars; i++){
            stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" size={36}/>)
        }

        if (halfStar){
            stars.push(<HalfStar key="half" rating={rating}/>);
        }

        for(let i = 1; i <= emptyStars; i++){
            stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-500" size={36}/>);
        }
        console.log(stars);
        
        return stars;
    }

    return (
        <div className="flex space-x-1">
            {starsRender()}
        </div>
    )
}