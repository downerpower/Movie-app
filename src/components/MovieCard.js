import { useState } from "react";
import { useAppContext } from "../context/MovieContext";
import { useThemeContext } from "../context/ThemeContext";

const MovieCard = ({ movie, newMovie }) => {
   const [isHovered, setIsHovered] = useState(false);

   const { watchList, addToWatchList, removeFromWatchlist, } = useAppContext();

   const { theme } = useThemeContext();

   const isInWatchlist = id => watchList.some(movie => movie.id === id);

   const classes = !isHovered ? 'hidden' : 'favorite';

   return (
      <div
         className={`card ${theme}--card`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {newMovie && <img src="../new.png" alt="new" className="card--new" />}
         <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + ' poster'}
         />
         <div className="card--content">
            <h3 className={`card--title ${theme}--card`}>{movie.title}</h3>
            {newMovie && (<div className='card--info'>
               <i className="ri-movie-2-line ri-fw" style={{ color: '#FDCF00' }}></i>
               <p className="card--release"><small>RELEASE DATE: {movie.release_date}</small></p>
            </div>)}
            <div className="card--bottom">
               <div className="card--info">
                  <i className="ri-star-fill ri-fw" style={{ color: '#FDCF00' }}></i>
                  <p><small>RATING: {movie.vote_average}</small></p>
               </div>
               <div className={classes}>
                  {!isInWatchlist(movie.id) ? <i className="ri-heart-add-line ri-fw ri-3x" style={{ color: '#AD241B' }} onClick={() => addToWatchList(movie)}></i> :
                     <i className="ri-heart-3-fill ri-fw ri-3x" style={{ color: '#AD241B' }} onClick={() => removeFromWatchlist(movie.id)}></i>}
               </div>
            </div>
         </div>
      </div >
   );
}

export default MovieCard;