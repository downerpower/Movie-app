import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import SearchForm from "./components/SearchForm";
import MovieCard from "./components/MovieCard";
import Navigation from "./components/Navigation";
import Watchlist from "./components/Watchlist";
import ComingSoon from "./components/ComingSoon";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const [query, setQuery] = useState("");

  const { theme } = useThemeContext();

  const handleInput = (e) => {
    setQuery(e.target.value);
  }

  const handleMovieSearchSubmit = (e) => {
    e.preventDefault();
    setQuery("");
  }

  const { data, error, loading } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=46e827d3e6854fcc00976da43dd924c9&language=ru-RU&query=${query}&page=1&include_adult=false`, query)

  const movies = data && data.filter(movie => movie.poster_path && movie.overview && movie.vote_average).map(movie => <MovieCard key={movie.id} movie={movie} />)
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
                  query={query}
                  handleInput={handleInput}
                />
                {<div className="card-list">{movies}</div>}
              </>
            }
          />
          <Route
            exact path="/watchlist"
            element={<Watchlist />}
          />
          <Route
            exact path="/new"
            element={<ComingSoon />}
          />
        </Routes>
      </div>
    </div >
  );
}

export default App;
