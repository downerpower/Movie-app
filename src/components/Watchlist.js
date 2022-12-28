import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/MovieContext";
import { useThemeContext } from "../context/ThemeContext";

const Watchlist = () => {

   const { watchList, removeFromWatchlist } = useAppContext();

   const { theme } = useThemeContext();

   return (
      <>
         {watchList.length === 0 && <p className={`watch--empty ${theme}`}>Your watchlist is empty.<Link to="/" className="watch--link"> Add something.</Link></p>}
         {/* <h1> watch list</h1> */}
         {watchList.length > 0 && watchList.map(movie => (
            <div
               className={`watch--item ${theme}--card`}
               key={movie.id}
            >
               <img className="watch--image"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + ' poster'}
               />
               <div className="watch--content">
                  <div className="watch--top">
                     <h3 className="watch--title">{movie.title}</h3>
                     <div className="bit-icon">
                        <i
                           className="ri-delete-bin-line ri-3x"
                           style={{ color: '#AD241B' }}
                           onClick={() => removeFromWatchlist(movie.id)}
                        ></i>
                     </div>
                  </div>
                  <p><small>RELEASE DATE: {movie.release_date}</small></p>
                  <div className="watch--rating">
                     <i className="ri-star-fill ri-fw" style={{ color: '#FDCF00' }}></i>
                     <p><small>RATING: {movie.vote_average}</small></p>
                  </div>
                  {/* <p><small>RATING: {movie.vote_average}</small></p> */}
                  <p className="watch--desc">{movie.overview}</p>
               </div>
            </div>
         ))
         }
      </>
   );
}



export default Watchlist;