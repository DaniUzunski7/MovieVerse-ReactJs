export default function Upcoming(){

    const upcomingMovies = [
        { title: "The Flash", releaseDate: "2025-06-15", poster: "https://source.unsplash.com/400x600/?flash,movie" },
        { title: "Avatar 2", releaseDate: "2025-12-20", poster: "https://source.unsplash.com/400x600/?avatar,movie" },
        { title: "Guardians of the Galaxy Vol. 3", releaseDate: "2025-08-05", poster: "https://source.unsplash.com/400x600/?guardians,movie" },
      ];

    return (
        <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Movies</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {upcomingMovies.map((movie, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-200">
            <img src={movie.poster} alt={movie.title} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-gray-300 mt-2">{movie.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}