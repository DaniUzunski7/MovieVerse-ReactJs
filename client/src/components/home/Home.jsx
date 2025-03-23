import { useEffect, useState } from "react";

import HeroSection from "./heroSection/HeroSection";

export default function Home(){
    const [movieCategory, setMovieCategory] = useState("lastAdded");
    const [movies, setMovies] = useState([]);
    
    const featuredMovies = [
        { title: "Inception", image: "https://source.unsplash.com/1600x900/?movie,scifi", poster: "https://source.unsplash.com/400x600/?inception,movie", description: "A mind-bending thriller by Christopher Nolan." },
        { title: "Interstellar", image: "https://source.unsplash.com/1600x900/?space,movie", poster: "https://source.unsplash.com/400x600/?interstellar,movie", description: "A journey beyond our galaxy to save humanity." },
        { title: "The Dark Knight", image: "https://source.unsplash.com/1600x900/?batman,movie", poster: "https://source.unsplash.com/400x600/?dark-knight,movie", description: "The legendary battle between Batman and Joker." }
      ];

    return (
        
        <main className="flex-grow p-6">
            <HeroSection />
          <div className="flex justify-center mb-6">
              <span className={`w-24 text-center text-sm font-bold ${movieCategory === "lastAdded" ? "text-yellow-400" : "text-gray-400"}`}>Recently Added</span>
            <div className="relative w-48 h-10 bg-gray-700 rounded-full flex items-center cursor-pointer p-1" onClick={() => setMovieCategory(movieCategory === "lastAdded" ? "upcoming" : "lastAdded")}>              
              <div className={`absolute left-1 top-1 w-8 h-8 bg-yellow-400 rounded-full transition-transform duration-200 ${movieCategory === "upcoming" ? "translate-x-[475%]" : "translate-x-0"}`}></div>
            </div>
              <span className={`w-24 text-center text-sm font-bold ${movieCategory === "upcoming" ? "text-yellow-400" : "text-gray-400"}`}>Upcoming Movies</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredMovies.map((_, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <div className="h-60 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/300x400/?movie')" }}></div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-yellow-400">{movieCategory === "lastAdded" ? "Recently Added" : "Upcoming Movie"}</h2>
                  <p className="text-gray-400 text-sm">Genre | Year</p>
                </div>
              </div>
            ))}
          </div>
        </main>
    )
}