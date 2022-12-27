import classes from './SearchForm.module.css'

const SearchForm = ({ setInputValue, inputValue }) => {

   const handleSubmit = (e) => {
      e.preventDefault();

      // setInputValue(inputValue);
   }

   return (
      <div className={classes.searchForm}>
         <form onSubmit={handleSubmit}>
            <input type='text' id='searchInput' name='searchInput' placeholder='find a book' value={inputValue} onChange={(e) =>
               setInputValue(e.target.value)
            } />
            <button type='submit'>Search</button>
         </form>
      </div>
   );
}

export default SearchForm;