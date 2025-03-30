import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import HighestRated from "./components/catalogs/HighestRated";
import Home from "./components/home/Home";
import Movies from "./components/catalogs/Movies";
import Upcoming from "./components/catalogs/Upcoming";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/Register";
import AddMovie from "./components/addMovie/AddMovie";
import MovieDetails from "./components/movieDetails/MovieDetails";
import About from "./components/about/About";

import { UserContext } from "./context/userContext";

import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router";
import { useState } from "react";
import Logout from "./components/user/logout/Logout";

function App() {
  const [user, setUser] = useState("");

  const loginHandler = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ ...user, loginHandler }}>
      <div className="flex flex-col min-h-screen w-full bg-gray-900 text-yellow-400">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/highest-rated" element={<HighestRated />} />
          <Route path="/movies/add" element={<AddMovie />} />
          <Route path="/:path/:id/details" element={<MovieDetails />} />
          <Route path="/movies/:id/edit" element={<AddMovie />} />

          <Route path="/login" element={<Login onLogin={loginHandler} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/about" element={<About />} />
        </Routes>

        <ToastContainer />

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
