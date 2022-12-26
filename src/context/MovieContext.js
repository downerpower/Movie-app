import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
   

   return (
      <MovieContext.Provider value={{}}>
         {children}
      </MovieContext.Provider>
   );
}

export default MovieContextProvider;