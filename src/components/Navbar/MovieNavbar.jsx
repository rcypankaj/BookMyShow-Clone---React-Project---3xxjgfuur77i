import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/MoiveContext";
import { auth, provider } from "../../googleSignIn/config";
import { signInWithPopup } from "firebase/auth";

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  // console.log(movie.original_title);
  return (
    <div className="text-gray-700 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">{movie.original_title}</h3>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </div>
  );
};

const NavLg = () => {
  // const [value, setValue] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputMovieName, setInputMovieName] = useState();

  // useEffect(() => {
  //   setValue(localStorage.getItem("displayName"));
  // }, [isLoggedIn]);

  const handleClickLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("displayName", data.user.displayName);
      setIsLoggedIn(true);
    });
  };

  const handleClickLogout = () => {
    localStorage.clear();
    window.location.reload();
    setIsLoggedIn(false);
  };

  const inputNameHandler = (e) => {
    setInputMovieName(e.target.value);
  };
  return (
    <div className="container flex mx-auto px-4 items-center justify-between">
      <div className="flex items-center w-1/2 gap-3">
        <div className="w-10 h-10">
          <Link to="/">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </Link>
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
            onChange={inputNameHandler}
          />
          <Link to="/filterMovie" state={inputMovieName}>
            Search
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Ghaziabad <BiChevronDown />
        </span>
        {!isLoggedIn && (
          <button
            className="bg-red-600 text-white px-2 py-1 text-sm rounded"
            onClick={handleClickLogin}
          >
            Sign In
          </button>
        )}
        {isLoggedIn && (
          <button
            className="bg-red-600 text-white px-2 py-1 text-sm rounded"
            onClick={handleClickLogout}
          >
            Logout
          </button>
        )}
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

const MovieNavbar = () => {
  return (
    <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
      <div className="lg:hidden">
        {/* Mobile Screen Navbar */}
        <NavSm />
      </div>
      <div className="hidden w-full lg:flex">
        {/* Large screen Navbar */}
        <NavLg />
      </div>
    </nav>
  );
};

export default MovieNavbar;
