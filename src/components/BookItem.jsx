import classes from './BookItem.module.css'
import { useAppContext } from '../context/appContext';

const BookItem = (props) => {
   const { futureReads, addToFutureReads, removeFromFutureReads } = useAppContext();

   const isFutureReads = id => futureReads.some(book => book.id === id);

   return (
      <div className={classes.cardWrapper}>
         <img src={props.url} alt={props.title} />
         <div className={classes.cardContent}>
            <p className={classes.bookTitle}>{props.title}</p>
            <p className={classes.bookAuthor}>{props.authors}</p>
         </div>
         <div className={classes.bookButton}>
            {isFutureReads(props.id) ?
               <button onClick={() => removeFromFutureReads(props.id)}>Remove from Future Reads</button>
               : <button onClick={() => addToFutureReads(props)}>Add to Future Reads</button>
            }
         </div>
      </div>
   );
}

export default BookItem;