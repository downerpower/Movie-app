import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./pagination/Pagination";
import { LoopCircleLoading } from 'react-loadingg';

import useFetch from "../hooks/useFetch";
import Genres from "./Genres";

const Trending = () => {
   // const [genres, setGenres] = useState([]);
   const [currentGenre, setCurrentGenre] = useState('');

   const handleGenreClick = (e) => {
      (currentGenre) !== e.target.value ? setCurrentGenre(e.target.value) : setCurrentGenre('')
   }

   const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&sort_by=popularity.desc&page=1&include_adult=false${currentGenre && `&with_genres=${currentGenre}`}`)



   const trendingMovies = data && data.results.filter(movie => movie.poster_path && movie.overview && movie.vote_average);


   return (
      <>
         {loading && <LoopCircleLoading color='#AD241B' />}
         <Genres currentGenre={currentGenre} handleGenreClick={handleGenreClick} />
         {!loading && <Pagination movieData={trendingMovies} />}
      </>
   );
}

export default Trending;