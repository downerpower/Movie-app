import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/MovieContext";
import { useThemeContext } from "../context/ThemeContext";
import styles from './MovieCard.module.css';

const MovieCard = ({ movie, newMovie }) => {
   const [isHovered, setIsHovered] = useState(false);

   const [width, setWidth] = useState(window.innerWidth);

   function handleWindowSizeChange() {
      setWidth(window.innerWidth);
   }
   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange);
      }
   }, []);

   const isDesktop = width >= 1280;

   const { watchList, addToWatchList, removeFromWatchlist, } = useAppContext();

   const { theme } = useThemeContext();

   const isInWatchlist = id => watchList.some(movie => movie.id === id);

   const classes = !isHovered ? `${styles.hidden}` : `${styles.favorite}`;

   return (
      <div
         className={`${styles.card} ${theme}--card`}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {newMovie && <img src="../new.png" alt="new" className={styles.cardNew} />}
         <Link to={`/${movie.id}`}>
            <img className={styles.cardImage}
               src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
               alt={movie.title + ' poster'}
            />
         </Link>
         <div className={styles.cardContent}>
            <h3 className={`${styles.cardTitle} ${theme}--card`}>{movie.title}</h3>
            {newMovie && (<div className={styles.cardInfo}>
               <i className="ri-movie-2-line ri-fw" style={{ color: '#FDCF00' }}></i>
               <p className={styles.cardRelease}><small className={styles.small}>RELEASE DATE: {movie.release_date}</small></p>
            </div>)}
            <div className={styles.cardBottom}>
               <div className={styles.cardInfo}>
                  <i className="ri-star-fill ri-fw" style={{ color: '#FDCF00' }}></i>
                  <p><small className={styles.small}>RATING: {movie.vote_average}</small></p>
               </div>
               <div className={isDesktop ? classes : undefined}>
                  <div className={styles.iconHeart}>
                     {!isInWatchlist(movie.id) ?
                        <svg onClick={() => addToWatchList(movie)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0H24V24H0z" /><path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243c2.262 2.268 2.34 5.88.236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404-1.503-1.499-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.991-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451l8.432 8.446L12 21.485 3.52 12.993c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z" fill="rgba(173,36,27,1)" />
                        </svg>
                        :
                        <svg onClick={() => removeFromWatchlist(movie.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0H24V24H0z" /><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" fill="rgba(173,36,27,1)" />
                        </svg>}
                  </div>
               </div>
            </div>
         </div>
      </div >
   );
}

export default MovieCard;