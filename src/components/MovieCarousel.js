import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { useThemeContext } from "../context/ThemeContext";

const MovieCarousel = ({ movies }) => {
   const { theme } = useThemeContext();

   const shuffledMovies = movies && movies.filter(movie => movie.title.length < 50).sort((a, b) => 0.5 - Math.random()).slice(0, 10);

   return (
      <div className={`carousel--container ${theme}--carousel`}>
         <Carousel
            itemsToShow={1}
            enableAutoPlay
            autoPlaySpeed={3000}
            transitionMs={700}
         >
            {shuffledMovies && shuffledMovies.map(movie =>
            (<Link to={`/${movie.id}`} key={movie.id}>
               <div key={movie.id} className='carousel--item'>
                  <div className='carousel--content'>
                     <h3 className={`carousel--title`}>{movie.title}</h3>
                     <div className="card--info">
                        <i className="ri-star-fill ri-fw" style={{ color: '#FDCF00' }}></i>
                        <p><small>RATING: {movie.vote_average}</small></p>
                     </div>
                     <div className='card--info'>
                        <i className="ri-movie-2-line ri-fw" style={{ color: '#FDCF00' }}></i>
                        <p className="card--release"><small>RELEASE DATE: {movie.release_date}</small></p>
                     </div>
                  </div>
                  <div className='carousel--poster'>
                     <img
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title + ' poster'}
                     />
                  </div>
               </div>
            </Link>)
            )}
         </Carousel>
      </div>
   );
}

export default MovieCarousel;