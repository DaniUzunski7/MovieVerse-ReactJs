# MovieVerse

MovieVerse is a React.js-based web application that allows users to browse and explore movies. The project includes a Node.js backend to serve movie data and an interactive frontend for seamless user experience.

## Features

- Browse a list of movies.
- View details of individual movies.
- Upcoming movies section.
- Login/Register functionality.
- Like and favorite movies.
- Backend API to serve movie data.

## Technologies Used

### Frontend

- React.js
- React Router
- Axios (for API requests)
- Tailwind CSS (for styling)
- Vite (for development server and build optimization)

### Backend

- Node.js
- Express.js (for API routes)
- JSON data storage
- Cors (to handle cross-origin requests)

## Installation and Setup

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Steps to Run the Project

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/MovieVerse.git
   cd MovieVerse
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the backend server**

   ```sh
   cd server
   node server
   ```

4. **Start the frontend React app** Open another terminal and run:

   ```sh
   cd client
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`

## API Endpoints

### Movies API (`moviesAPI.js`)

- `GET /movies` - Fetches the list of movies.
- `GET /movies/:id` - Fetches details of a specific movie.
- `POST /movies` - Adds a new movie.
- `PUT /movies/:id` - Edits an existing movie.
- `DELETE /movies/:id` - Deletes a movie.

### Authentication API (`authAPI.js`)

- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Authenticate a user.
- `GET /users/logout` - Logs out the user.

### Likes API (`likesAPI.js`)

- `POST /likes` - Like a movie.
- `GET /likes` - Fetch liked movies.

## Project Structure

```
MovieVerse/
│── server/                 # Backend API
│   ├── data/               # JSON movie data
│   │   ├── upcoming.json   # Upcoming movies data
│   ├── server.js           # Express server
│── client/                 # Frontend React app
│   ├── src/                # Source files
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── context/        # Context API for global state
│   │   ├── assets/         # Static assets (images, icons, etc.)
│   │   ├── styles/         # CSS/Tailwind styles
│   │   ├── App.jsx         # Root component
│   │   ├── main.jsx        # Entry point
│── public/                 # Static assets
│── package.json            # Project dependencies
│── vite.config.js          # Vite configuration
│── README.md               # Project documentation
```

## Contact

- **Name:** Daniel Uzunski
- **GitHub:** [DaniUzunski7](https://github.com/DaniUzunski7)

## License

This project is licensed under the MIT License.

