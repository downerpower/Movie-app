import { useThemeContext } from "../context/ThemeContext";
import styles from './SearchForm.module.css'

const SearchForm = ({ handleMovieSearchSubmit, inputValue, query, handleInput, handleButtonCloseClick, inputRef }) => {
   const { theme } = useThemeContext();

   return (
      <div className={styles.searchForm}>

         <div className={styles.searchArea}>
            <form className={styles.form} onSubmit={handleMovieSearchSubmit} >
               <input
                  type="text"
                  name="query"
                  placeholder="e.g. Jurassic Park"
                  className={`${styles.input} ${theme}`}
                  value={inputValue}
                  onChange={handleInput}
                  onSubmit={handleMovieSearchSubmit}
                  ref={inputRef}
               />
            </form >
            {inputValue && <div className={styles.btnClose} onClick={handleButtonCloseClick}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" /></svg>
            </div>}
         </div>
         <button className={`${styles.btnSearch} ${theme}--btn`} onClick={handleMovieSearchSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
         </button>
      </div>
   );
}

export default SearchForm;