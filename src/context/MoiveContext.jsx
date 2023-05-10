import { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovie = () => {
    if (!localStorage.getItem("displayName")) {
      alert("Please login before proceed!");
      return;
    }
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    if (!localStorage.getItem("displayName")) {
      alert("Please login before proceed!");
      return;
    }
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        isOpen,
        setIsOpen,
        price,
        setPrice,
        rentMovie,
        buyMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
