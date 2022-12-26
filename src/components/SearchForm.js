const SearchForm = ({ handleMovieSearchSubmit, query, handleInput, searchInput }) => {
   return (
      <form className="form" onSubmit={handleMovieSearchSubmit} >
         {/* <label htmlFor="query" className="label">Movie Name</label> */}
         <input
            type="text"
            name="query"
            placeholder="e.g. Jurassic Park"
            className="input"
            value={query}
            onChange={handleInput}
         />
         {/* <button type="submit" className="button">Искать</button> */}
      </form >);
}

export default SearchForm;