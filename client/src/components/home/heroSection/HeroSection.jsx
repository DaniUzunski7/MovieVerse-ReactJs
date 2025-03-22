import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function HeroSection(){
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
        }, 5000);
        return () => clearInterval(interval);
      }, []);

      const featuredMovies = [
        { 
            title: "Inception", 
            image: "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png", 
            description: "A mind-bending thriller by Christopher Nolan." },

        { 
            title: "Interstellar", 
            image: "https://www.pixel4k.com/wp-content/uploads/2021/04/interstellar-astronaut-4k_1618130890.jpg", 
            description: "A journey beyond our galaxy to save humanity." },

        { 
            title: "The Dark Knight", 
            image: "https://wallpaperswide.com/download/the_dark_knight_movie-wallpaper-1920x1200.jpg", 
            description: "The legendary battle between Batman and Joker." 
        },
      ];
    
    return (
        
         <section className="relative h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[68vh] w-full flex items-center justify-center overflow-hidden mb-5">
         <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent bg-opacity-60"></div>
         <div
           className="absolute inset-0 h-full w-full bg-cover bg-center transition-all duration-700"
           style={{ backgroundImage: `url(${featuredMovies[currentIndex].image})`, backgroundSize: '100%', backgroundPosition: 'center' }}
         ></div>
         <div className="relative z-10 flex flex-col items-center text-center px-6">
           <h1 className="text-4xl font-bold text-yellow-400 mt-4 drop-shadow-2x1">{featuredMovies[currentIndex].title}</h1>
           <p className="text-gray-300 mt-2 max-w-xl">{featuredMovies[currentIndex].description}</p>
           <Link to="/highest-rated" className="mt-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300">Explore Top Rated Movies</Link>
         </div>
       </section>
    )
}