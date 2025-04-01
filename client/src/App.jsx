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

import Logout from "./components/user/logout/Logout";
import UserDetails from "./components/user/details/UserDetails";
import EditMovie from "./components/editMovie/EditMovie";
import usePersistedState from "./hooks/usePersistedState";

function App() {
  const [user, setUser] = usePersistedState('auth', {});

  const loginHandler = (userData) => {
    setUser(userData);
  };

  const logoutHandler = () => {
    setUser({});
  }

  return (
    <UserContext.Provider value={{ ...user, loginHandler, logoutHandler }}>
      <div className="flex flex-col min-h-screen w-full bg-gray-900 text-yellow-400">
        <Header userName={user.userName}/>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/highest-rated" element={<HighestRated />} />
          <Route path="/movies/add" element={<AddMovie />} />
          <Route path="/:path/:id/details" element={<MovieDetails />} />
          <Route path="/movies/:id/edit" element={<EditMovie />} />

          <Route path="/login" element={<Login onLogin={loginHandler} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user/:id/details" element={ <UserDetails /> } />

          <Route path="/about" element={<About />} />
        </Routes>

        <ToastContainer />

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
