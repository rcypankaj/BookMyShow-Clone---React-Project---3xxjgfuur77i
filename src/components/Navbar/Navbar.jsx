import { useState } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { auth, provider } from "../../googleSignIn/config";
import { signInWithPopup } from "firebase/auth";

const NavSm = () => {
  return (
    <div className="flex items-center justify-between text-white">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here!</h3>
        <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
          Ghaziabad
          <BiChevronDown />
        </span>
      </div>
      <div className="w-8 h-8">
        <BiSearch className="w-full h-full" />
      </div>
    </div>
  );
};

const NavMd = () => {
  const [inputMovieName, setInputMovieName] = useState();

  const inputNameHandler = (e) => {
    setInputMovieName(e.target.value);
  };
  return (
    <div className="flex items-center w-full gap-3">
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
            onChange={inputNameHandler}
            placeholder="Search for movies, events, plays, sports and activities"
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
        <Link
          to="/plays"
          className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
        >
          Plays
        </Link>
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

const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Mobile Screen Navbar */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium Screen Navbar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large Screen Navbar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
