import BookItem from "./BookItem";
import useFetch from '../hooks/useFetch'
import { API_URL } from "../API";
import classes from './BookList.module.css'
import { useState } from "react";

const BookList = ({ inputValue }) => {
   const {isSearching, setIsSearching} = useState(false);

   if (!inputValue)

   if (!inputValue) {
      // const { data: books, loading, error } = useFetch(`${API_URL}?q=${inputValue}`);
   }

   const { data: books, loading, error } = useFetch(`${API_URL}?q=${inputValue}`);

   if (error) {
      console.log(error)
   }

   console.log(books)

   return (
      <div className={classes.bookList }>
         {loading && <div>Loading...</div>}
         {books && books.map(book => (<BookItem key={book.id} url={book.image_url} authors={book.authors} title={book.title} description={book.description} id={book.id}/>))}
      </div>
   );
}

export default BookList;