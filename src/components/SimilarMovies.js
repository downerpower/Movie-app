import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";

const SimilarMovies = ({ movieId }) => {

   const { data, loading } = useFetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&page=1`)

   return (
      <>
         {!loading && data && data.results && data.results.length > 0 && <p className="watch--empty">You might also like</p>}
         {!loading && <div className="card-list">
            {data && data.results && data.results.filter(movie => movie.poster_path && movie.overview && movie.release_date && movie.vote_average).sort((a, b) => a - b).slice(0, 4).map(movie => < MovieCard key={movie.id} movie={movie} />)}
         </div>}
      </>
   );
}

export default SimilarMovies;