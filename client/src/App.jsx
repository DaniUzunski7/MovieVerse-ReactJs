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


import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router";

import Logout from "./components/user/logout/Logout";
import UserDetails from "./components/user/details/UserDetails";
import EditMovie from "./components/editMovie/EditMovie";
import UserProvider from "./context/UserContext";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";

function App() {

  return (

    <UserProvider>

      <div className="flex flex-col min-h-screen w-full bg-gray-900 text-yellow-400">
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/highest-rated" element={<HighestRated />} />
          <Route path="/:path/:id/details" element={<MovieDetails />} />

          <Route path="/about" element={<About />} />

          <Route element={ <AuthGuard /> }>
          
          <Route path="/movies/add" element={<AddMovie />} />
          <Route path="/movies/:id/edit" element={<EditMovie />} />
          
          <Route path="/logout" element={<Logout />} />
          
          </Route>

          <Route element={ <GuestGuard /> }>
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          
          </Route>        
        </Routes>

        <ToastContainer />

        <Footer />
      </div>
    </UserProvider>

  );
}

export default App;
