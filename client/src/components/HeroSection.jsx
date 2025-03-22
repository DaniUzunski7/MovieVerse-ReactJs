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
            image: "https://images.bauerhosting.com/legacy/empire-tmdb/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80", 
            description: "A mind-bending thriller by Christopher Nolan." },

        { 
            title: "Interstellar", 
            image: "https://images.alphacoders.com/129/1299427.jpg", 
            description: "A journey beyond our galaxy to save humanity." },

        { 
            title: "The Dark Knight", 
            image: "https://theconsultingdetectivesblog.com/wp-content/uploads/2014/06/the-dark-knight-original.jpg", 
            description: "The legendary battle between Batman and Joker." }
      ];
    
    return (
        
         <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
         <div
           className="absolute inset-0 h-full w-full bg-cover bg-center transition-all duration-1000"
           style={{ backgroundImage: `url(${featuredMovies[currentIndex].image})` }}
         ></div>
         <div className="relative z-10 flex flex-col items-center text-center px-6">
           {/* <img src={featuredMovies[currentIndex].poster} alt={featuredMovies[currentIndex].title} className="w-52 md:w-64 lg:w-80 shadow-lg rounded-lg" /> */}
           <h1 className="text-4xl font-bold text-yellow-400 mt-4 drop-shadow-md">{featuredMovies[currentIndex].title}</h1>
           <p className="text-gray-300 mt-2 max-w-xl">{featuredMovies[currentIndex].description}</p>
           <Link to="/trending" className="mt-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300">Explore Top Rated Movies</Link>
         </div>
       </section>

    )
}