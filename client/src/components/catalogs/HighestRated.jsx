export default function HighestRated() {
    const highestRatedMovies = [
        { title: "The Dark Knight", rating: "9.1", poster: "https://source.unsplash.com/400x600/?dark-knight,movie" },
        { title: "Inception", rating: "9.0", poster: "https://source.unsplash.com/400x600/?inception,movie" },
        { title: "Interstellar", rating: "8.6", poster: "https://source.unsplash.com/400x600/?interstellar,movie" },
        { title: "The Shawshank Redemption", rating: "9.3", poster: "https://source.unsplash.com/400x600/?shawshank,movie" },
        { title: "The Godfather", rating: "9.2", poster: "https://source.unsplash.com/400x600/?godfather,movie" },
        { title: "The Matrix", rating: "8.7", poster: "https://source.unsplash.com/400x600/?matrix,movie" },
        { title: "The Empire Strikes Back", rating: "8.8", poster: "https://source.unsplash.com/400x600/?empire,movie" },
        { title: "Forrest Gump", rating: "8.8", poster: "https://source.unsplash.com/400x600/?forrest,gump,movie" },
        { title: "The Lord of the Rings: The Return of the King", rating: "8.9", poster: "https://source.unsplash.com/400x600/?lotr,movie" },
        { title: "Gladiator", rating: "8.5", poster: "https://source.unsplash.com/400x600/?gladiator,movie" }
        // You can add more if needed
      ];

    return (
    <div className="bg-gray-900 text-yellow-400 min-h-screen py-8 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Top 10 Highest Rated Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {highestRatedMovies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-200 mb-8"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-gray-300 mt-2">Rating: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
