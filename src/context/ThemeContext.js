import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

export const useThemeContext = () => {
   const context = useContext(ThemeContext);

   if (context === undefined) {
      throw new Error('Appcontext must be within appContextProvider')
   }

   return context;
}

const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState('light');

   const toggleTheme = () => {
      (theme === 'light') ? setTheme('dark') : setTheme('light');
   }

   return (
      <ThemeContext.Provider value={{
         theme,
         toggleTheme
      }}>
         {children}
      </ThemeContext.Provider>
   );
}

export default ThemeContextProvider;