import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import MovieCard from "./MovieCard";

const ComingSoon = () => {
   const [newMoviesData, setNewMoviesData] = useState([])

   // // https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

   // const REALEASES_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&page=1'

   // // const { data, error, loading } = useFetch(REALEASES_URL, 'movies')

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&page=1')
         .then(res => res.json())
         .then(data => {
            // console.log(data.results)
            setNewMoviesData(data.results)
         })
   }, [])

   // const RELEASE_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&page=1';

   // const { data, error, loading } = useFetch(RELEASE_URL, 'new movies');

   // console.log(data)

   // setNewMoviesData(data.results)


   const newMovie = true;

   const newMovies = (newMoviesData.length > 0) && (newMoviesData.map(movie => <MovieCard movie={movie} key={movie.id} newMovie={newMovie} />))

   // const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/search/movie/upcoming?api_key=46e827d3e6854fcc00976da43dd924c9&language=ru-RU&page=1&include_adult=false`, 'movies')

   // console.log(data)
   // setNewMoviesData(data);

   return (
      <>
         <div className="card-list"> {newMovies}</div>
      </>
   );
}

export default ComingSoon;

// 1. отфильтровать релизы Future Releases дата позднее сегодняшней даты пользователя!!
// 2. отрендерить карточки
// 3. Добавить карточкам возможность добавлять в избранное
// 4. Добавить будущим релизам флажок, чтобы выделять их среди лайкнутых
// 5. Добавить фильтрацию
// 6. Удалять результаты поиска при переходе в новый раутер
// 7. Добавить светлую тему