import { useThemeContext } from "../context/ThemeContext";
import { useAppContext } from "../context/MovieContext";
import styles from './Movie.module.css'

const Movie = ({ movie, isWatchList }) => {
   const { theme } = useThemeContext();

   const isInWatchlist = id => watchList.some(movie => movie.id === id);
   const { watchList, addToWatchList, removeFromWatchlist } = useAppContext();

   return (
      <div
         className={`${styles.watchItem} ${theme}--card`}
         key={movie.id}
      >
         <div>
            <img className={styles.watchImage}
               src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
               alt={movie.title + ' poster'}
            />
         </div>
         <div className={styles.watchContent}>
            <div className={styles.watchTop}>
               <h3 className={styles.watchTitle}>{movie.title}</h3>

               {isWatchList ?
                  <div className={styles.iconBig}>
                     <svg onClick={() => removeFromWatchlist(movie.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" fill="rgba(173,36,27,1)" />
                     </svg>
                  </div> :
                  !isInWatchlist(movie.id) ?
                     <div className={styles.iconBig}>
                        <svg onClick={() => addToWatchList(movie)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0H24V24H0z" /><path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243c2.262 2.268 2.34 5.88.236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404-1.503-1.499-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.991-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451l8.432 8.446L12 21.485 3.52 12.993c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z" fill="rgba(173,36,27,1)" />
                        </svg>
                     </div> :
                     <div className={styles.iconBig}>
                        <svg onClick={() => removeFromWatchlist(movie.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0H24V24H0z" /><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" fill="rgba(173,36,27,1)" />
                        </svg>
                     </div>
               }

            </div>
            {movie.release_date && <div className={styles.watchRating}>
               <i className="ri-movie-2-line ri-fw" style={{ color: '#FDCF00' }}></i>
               <p className="card--release"><small>RELEASE DATE: {movie.release_date}</small></p>
            </div>}
            {movie.vote_average && <div className={styles.watchRating}>
               <i className="ri-star-fill ri-fw" style={{ color: '#FDCF00' }}></i>
               <p><small>RATING: {movie.vote_average}</small></p>
            </div>}
            {movie.budget > 0 && <div className={styles.watchBudget}>
               <i className="ri-money-dollar-circle-fill" style={{ color: '#FDCF00' }}></i>
               <p><small>BUDGET: {movie.budget}</small></p>
            </div>}
            <p className={styles.watchDescription}>{movie.overview}</p>
            {movie.production_companies &&
               <div className={styles.watchCompanies}>
                  {movie.production_companies.map((company, i) => <p key={i} className={styles.watchCompany}>{company.name}</p>)}
               </div>
            }
         </div>
      </div >
   );
}

export default Movie;