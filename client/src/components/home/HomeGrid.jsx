export default function HomeGrid({
    movies,
    category
}){ 
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map(movie => (
              <div key={movie._id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <div className="h-60 bg-cover bg-center" style={{ backgroundImage: `url(${movie.poster})` }}></div>
                <div className="p-4 text-center mt-1">
                  <h2 className="text-lg font-bold text-yellow-400 mb-0.5">{movie.title}</h2>
                  {category === 'upcoming'
                    ? <p className="text-gray-400 text-sm">Relase date: {movie.year}</p>
                    : <p className="text-gray-400 text-sm">Added: {new Date(movie._createdOn).toLocaleString()}</p> 
                  }
                </div>
              </div>
            ))}
          </div>
    )
}