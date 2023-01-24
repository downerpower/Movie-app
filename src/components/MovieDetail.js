import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

import SimilarMovies from "./SimilarMovies";
import Movie from "./Movie";

const MovieDetail = () => {
   const { movieId } = useParams();

   const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=46e827d3e6854fcc00976da43dd924c9`)

   return (
      <>
         {data && <Movie movie={data} />}
         {data && <SimilarMovies movieId={data.id} />}
      </>
   );
}

export default MovieDetail;