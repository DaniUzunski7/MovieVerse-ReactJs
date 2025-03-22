import Pagination from "./Pagination";

import { Link } from "react-router";

export default function TvSeries(){
    const tvSeries = [
        { id: 1, title: "Breaking Bad", releaseDate: "2008-01-20", posterUrl: "https://source.unsplash.com/400x600/?breaking-bad,tv-series" },
        { id: 2, title: "Stranger Things", releaseDate: "2016-07-15", posterUrl: "https://source.unsplash.com/400x600/?stranger-things,tv-series" },
        { id: 3, title: "The Crown", releaseDate: "2016-11-04", posterUrl: "https://source.unsplash.com/400x600/?the-crown,tv-series" },
        { id: 4, title: "The Office", releaseDate: "2005-03-24", posterUrl: "https://source.unsplash.com/400x600/?the-office,tv-series" },
        { id: 5, title: "The Mandalorian", releaseDate: "2019-11-12", posterUrl: "https://source.unsplash.com/400x600/?mandalorian,tv-series" },
        { id: 6, title: "Game of Thrones", releaseDate: "2011-04-17", posterUrl: "https://source.unsplash.com/400x600/?game-of-thrones,tv-series" },
        { id: 7, title: "The Witcher", releaseDate: "2019-12-20", posterUrl: "https://source.unsplash.com/400x600/?witcher,tv-series" },
        { id: 8, title: "Black Mirror", releaseDate: "2011-12-04", posterUrl: "https://source.unsplash.com/400x600/?black-mirror,tv-series" },
        { id: 9, title: "Chernobyl", releaseDate: "2019-05-06", posterUrl: "https://source.unsplash.com/400x600/?chernobyl,tv-series" },
        { id: 10, title: "Narcos", releaseDate: "2015-08-28", posterUrl: "https://source.unsplash.com/400x600/?narcos,tv-series" }
      ];

    return (
        <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">TV Series</h1>
  
        {/* Add Your Favourite TV Series Section */}
        <div className="mb-8 text-center">
          <Link
            to="/add-content"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition duration-300 ease-in-out"
          >
            Add your favourite TV Series
          </Link>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tvSeries.map((series) => (
            <div key={series.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
              <div className="relative group">
                <img src={series.posterUrl} alt={series.title} className="w-full h-72 object-cover rounded-t-lg" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center h-full">
                    <Link
                      to={`/tv-series/${series.id}`}
                      className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-200">{series.title}</h2>
                <p className="text-gray-400 mt-2">Release Date: {new Date(series.releaseDate).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>

          <Pagination />

        </div>
    )
}