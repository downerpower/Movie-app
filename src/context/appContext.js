import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
   const context = useContext(AppContext);

   if (context === undefined) {
      throw new Error('Appcontext must be within appContextProvider')
   }

   return context;
}

const AppContextProvider = ({ children }) => {
   const [futureReads, setFutureReads] = useState([]);

   const addToFutureReads = (book) => {
      const oldFutureReads = [...futureReads];
      const newFutureReads = oldFutureReads.concat(book);

      setFutureReads(newFutureReads);
   }
   const removeFromFutureReads = (id) => {
      const oldFutureReads = [...futureReads];
      const newFutureReads = oldFutureReads.filter(book => book.id !== id);

      setFutureReads(newFutureReads);
   }

   return (
      <AppContext.Provider value={{ futureReads, addToFutureReads, removeFromFutureReads }}>
         {children}
      </AppContext.Provider>
   );
};

export default AppContextProvider;