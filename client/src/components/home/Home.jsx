import { useEffect, useState } from "react";

import HeroSection from "./heroSection/HeroSection";
import movieServices from "../../services/movieServices";
import HomeGrid from "./HomeGrid";
import { useMovies } from "../../api/moviesAPI";

export default function Home(){
    const [movieCategory, setMovieCategory] = useState("lastAdded");
    const [upcoming, setUpcomming] = useState([]);
    
    const { movies } = useMovies();

      useEffect( () => {
          movieServices.getAll('upcoming')
          .then((data) => {
            setUpcomming(data.slice(-4).reverse());
          })
        }, [movieCategory])
      
    return (
        
        <main className="flex-grow p-6">
            
            <HeroSection />

          <div className="flex justify-center mb-6">
              <span className={`w-24 text-center text-sm font-bold ${movieCategory === "lastAdded" ? "text-yellow-400" : "text-gray-400"}`}>Recently  Added</span>
            <div className="relative w-48 h-10 bg-gray-700 rounded-full flex items-center cursor-pointer p-1" onClick={() => setMovieCategory(movieCategory === "lastAdded" ? "upcoming" : "lastAdded")}>              
              <div className={`absolute left-1 top-1 w-8 h-8 bg-yellow-400 rounded-full transition-transform duration-200 ${movieCategory === "upcoming" ? "translate-x-[475%]" : "translate-x-0"}`}></div>
            </div>
              <span className={`w-24 text-center text-sm font-bold ${movieCategory === "upcoming" ? "text-yellow-400" : "text-gray-400"}`}>Upcoming Movies</span>
          </div>
          
          {movieCategory === 'lastAdded'
            ? <HomeGrid movies={movies} category={movieCategory}/>
            : <HomeGrid movies={upcoming} category={movieCategory}/>
          }
          
        </main>
    )
}