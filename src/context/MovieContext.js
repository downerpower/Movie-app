import { createContext, useState, useContext } from "react";

const MovieContext = createContext(null);

export const useAppContext = () => {
   const context = useContext(MovieContext);

   if (context === undefined) {
      throw new Error('Appcontext must be within appContextProvider')
   }

   return context;
}

const MovieContextProvider = ({ children }) => {
   const [watchList, setWatchList] = useState([]);

   const addToWatchList = (newItem) => {
      setWatchList(prevWatchlist => [...prevWatchlist, newItem]);
   }

   const removeFromWatchlist = (id) => {
      const oldWatchlist = [...watchList];
      const newWatchlist = oldWatchlist.filter(movie => movie.id !== id);
      setWatchList(newWatchlist)
   }

   return (
      <MovieContext.Provider value={{
         watchList,
         addToWatchList,
         removeFromWatchlist,
      }}>
         {children}
      </MovieContext.Provider>
   );
}

export default MovieContextProvider;