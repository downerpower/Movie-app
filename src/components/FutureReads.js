import { useState } from 'react';
import { useAppContext } from '../context/appContext';
import classes from './FutureReads.module.css'

const FutureReads = () => {
   const { futureReads, addToFutureReads, removeFromFutureReads } = useAppContext();
   
   const isFutureReads = id => futureReads.some(book => book.id === id);

   return (
      <div className={classes.cardWrapper}>
         {futureReads.length > 0 ? futureReads.map(futureRead => (
            <div key={futureRead.id} className={classes.futureRead}>
               <div><h4>{futureRead.title}</h4></div>
               <div className={classes.futureReadImage}><img src={futureRead.url} alt={futureRead.title} /></div>
               <div>
                  {isFutureReads(futureRead.id) ?
                     <button onClick={() => removeFromFutureReads(futureRead.id)}>Remove From Future Reads</button>
                     : <button onClick={() => addToFutureReads(futureRead)}>Add to Future Reads</button>
                  }
               </div>
            </div>
         )):<h3>You don't have any books yet</h3>} 
         </div>
   );
}

export default FutureReads;