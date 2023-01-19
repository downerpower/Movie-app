import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import SearchForm from "./components/SearchForm";
import Navigation from "./components/Navigation";
import Watchlist from "./components/Watchlist";
import ComingSoon from "./components/ComingSoon";
import { useThemeContext } from "./context/ThemeContext";
import Pagination from "./components/pagination/Pagination";
import Trending from "./components/Trending";
import MovieDetail from "./components/MovieDetail";
import MovieCarousel from "./components/MovieCarousel";
import { LoopCircleLoading } from 'react-loadingg';
import MovieCard from "./components/MovieCard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  const { theme } = useThemeContext();

  const inputRef = useRef(null);

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleMovieSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue)
  }

  const handleButtonCloseClick = () => {
    setInputValue("");
    setQuery("");
    inputRef.current.focus();
  }

  let url = query ? `https://api.themoviedb.org/3/search/movie?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&query=${query}&include_adult=false&page=1` : `https://api.themoviedb.org/3/discover/movie?api_key=46e827d3e6854fcc00976da43dd924c9&language=en-US&sort_by=popularity.desc&page=1&include_adult=false`

  const { data, error, loading } = useFetch(url)

  const movies = data && data.results.filter(movie => movie.poster_path && movie.overview && movie.vote_average);

  return (
    <div className={`body--contaner ${theme}`}>
      <div className="container">
        <Navigation />
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <SearchForm
                  handleMovieSearchSubmit={handleMovieSearchSubmit}
                  inputValue={inputValue}
                  query={query}
                  handleInput={handleInput}
                  handleButtonCloseClick={handleButtonCloseClick}
                  inputRef={inputRef}
                />
                {loading && <LoopCircleLoading color='#AD241B' />}
                {!query && !inputValue && <MovieCarousel movies={data && data.results} />}
                {query && data && !movies.length && <p className="watch--empty">No movies found</p>}
                {!loading && query &&
                  (movies.length > 8 ?
                    <Pagination movieData={movies} /> :
                    <div className="card-list">
                      {movies.map(movie => <MovieCard key={movie.id} movie={movie} newMovie={false} />)}
                    </div>

                  )
                }
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<Watchlist />}
          />
          <Route
            path="/trending"
            element={<Trending />}
          />
          <Route
            path="/new"
            element={<ComingSoon />}
          />
          <Route
            path="/:movieId"
            element={<MovieDetail />}
          />
        </Routes>
      </div>
    </div >
  );
}

export default App;
