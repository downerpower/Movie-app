import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Pagination from "./pagination/Pagination";
import { LoopCircleLoading } from 'react-loadingg';

const ComingSoon = () => {

   const dropdownOptions = ['All', 'From newest to oldest', 'From oldest to newest'];

   const { data, error, loading } = useFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&page=1')

   return (
      <>
         {loading && <LoopCircleLoading color='#AD241B' />}
         {!loading && <Pagination movieData={data && data.results} newMovie={true} />}
      </>
   );
}

export default ComingSoon;