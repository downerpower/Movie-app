import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MovieCard from "../components/MovieCard";

// Example items, to simulate fetching from another resources.

function ReleasesPagination({ movieData }) {
   const [currentMovies, setCurrentMovies] = useState([]);
   const [pageCount, setPageCount] = useState(0);
   const [movieOffSet, setMovieOffSet] = useState(0);

   const moviesPerPage = 8;

   const newMovie = true;

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
         <div className="card-list">
            {currentMovies.map(movie => < MovieCard key={movie.id} movie={movie} newMovie={newMovie} />)}
         </div>
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

export default ReleasesPagination;