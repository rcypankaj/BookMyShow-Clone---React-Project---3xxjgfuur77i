import axios from "axios";

// Component
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PlayPage from "./pages/PlayPage";
import FilterPage from "./pages/FilterPage";

// Routing
import { Route, Routes } from "react-router-dom";

// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignIn from "./googleSignIn/SignIn";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
      <Route path="/filterMovie" element={<FilterPage />} />
    </Routes>
  );
}

export default App;
