import { useThemeContext } from "../context/ThemeContext";
import useFetch from "../hooks/useFetch";

const Genres = ({ currentGenre, handleGenreClick }) => {

   const { theme } = useThemeContext();

   const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US`)

   return (
      <div className="genres">
         {data && data.genres && data.genres.map(genre => <button className={`btn--genre ${+(currentGenre) === genre.id && 'btn---active'} ${theme}--card`} key={genre.id} value={genre.id} onClick={handleGenreClick}>{genre.name}</button>)}
      </div>
   );
}

export default Genres;