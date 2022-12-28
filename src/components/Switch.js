import { useThemeContext } from "../context/ThemeContext";

const Switch = () => {
   const { toggleTheme } = useThemeContext();

   return (
      <div className="switch">
         <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round" onClick={toggleTheme}></div>
         </label>
      </div>
   );
}

export default Switch;