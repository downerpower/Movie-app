import { Link } from "react-router-dom";
import { useAppContext } from "../context/MovieContext";
import { useThemeContext } from "../context/ThemeContext";
import Movie from "./Movie";
import Pagination from "./pagination/Pagination";

const Watchlist = () => {

   const { watchList } = useAppContext();

   const { theme } = useThemeContext();

   return (
      <>
         {watchList.length === 0 && <p className={`watch--empty ${theme}`}>Your watchlist is empty.<Link to="/" className="watch--link"> Add something.</Link></p>}

         {watchList.length > 0 && (
            watchList.length > 8 ?
               <Pagination movieData={watchList} inWatchlist={true} /> :
               watchList.map(movie => <Movie key={movie.id} movie={movie} isWatchList={true} />)
         )}
      </>

   );
}



export default Watchlist;