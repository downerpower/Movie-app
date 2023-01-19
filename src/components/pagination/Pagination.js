import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MovieCard from "../MovieCard";
import Movie from '../Movie';

function Pagination({ movieData, inWatchlist, newMovie }) {
   const [currentMovies, setCurrentMovies] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [movieOffSet, setMovieOffSet] = useState(0);

   const moviesPerPage = 8;

   useEffect(() => {
      const movieEndOffset = movieOffSet + moviesPerPage;
      movieData && setCurrentMovies(movieData.slice(movieOffSet, movieEndOffset))
      movieData && setPageCount(Math.ceil(movieData.length / moviesPerPage))
   }, [movieData, movieOffSet, moviesPerPage])

   const handlePageClick = (e) => {
      const newMovieOffSet = (e.selected * moviesPerPage) % movieData.length;
      setMovieOffSet(newMovieOffSet);
   }

   return (
      <>
         {inWatchlist && currentMovies.map(movie => <Movie key={movie.id} movie={movie} />)}
         {!inWatchlist && <div className="card-list">
            {currentMovies.map(movie => <MovieCard key={movie.id} movie={movie} newMovie={newMovie} />)}
         </div>}
         <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
            disabledLinkClassName="disabled"
         />
      </>

   );
}

export default Pagination;