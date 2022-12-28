import { useContext } from "react";
import { useThemeContext } from "../context/ThemeContext";

const SearchForm = ({ handleMovieSearchSubmit, query, handleInput, searchInput }) => {
   const { theme } = useThemeContext();

   return (
      <form className="form" onSubmit={handleMovieSearchSubmit} >
         <input
            type="text"
            name="query"
            placeholder="e.g. Jurassic Park"
            className={`input ${theme}`}
            value={query}
            onChange={handleInput}
            onSubmit={handleMovieSearchSubmit}
         />
      </form >);
}

export default SearchForm;