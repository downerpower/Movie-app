import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ReleasesPagination from "./ReleasesPagination";
import MovieCard from "./MovieCard";

const ComingSoon = () => {
   const [newMoviesData, setNewMoviesData] = useState([])

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&page=1')
         .then(res => res.json())
         .then(data => {
            // console.log(data.results)
            setNewMoviesData(data.results)
         })
   }, [])


   // const newMovie = true;

   // const newMovies = (newMoviesData.length > 0) && (newMoviesData.map(movie => <MovieCard movie={movie} key={movie.id} newMovie={newMovie} />))


   return (
      <>
         {/* <div className="card-list"> */}
         <ReleasesPagination movieData={newMoviesData} />
         {/* </div> */}
      </>
   );
}

export default ComingSoon;

// 5. Добавить фильтрацию
// 6. Удалять результаты поиска при переходе в новый раутер