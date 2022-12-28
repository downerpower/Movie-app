import { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";
import { useThemeContext } from "../context/ThemeContext";

const Navigation = () => {
   const [isActive, setIsActive] = useState({
      home: false,
      watchlist: false,
      new: false
   });

   const { theme } = useThemeContext();

   return (
      <nav className="navigation">
         {theme === 'dark' ? <img src='../Logo.svg' alt='logo' className="logo" /> :
            <img src='../Logo-dark.svg' alt='logo' className="logo" />}
         <ul>
            <li>
               <Link to="/" className={`nav--link ${theme}`} onFocus={() => setIsActive(prevValue => ({ ...prevValue, home: true }))} onBlur={() => setIsActive(prevValue => ({ ...prevValue, home: false }))}>
                  {isActive.home ? <i className="ri-compass-3-fill ri-fw ri-2x" style={{ color: '#AD241B' }}></i> : <i className="ri-compass-3-line ri-fw ri-2x"></i>}
                  {/* <i className="ri-compass-3-line ri-fw ri-2x"></i> */}
                  <p className="navigation--title">Browse</p>
               </Link>
            </li>
            <li>
               <Link to="/watchlist" className={`nav--link ${theme}`} onFocus={() => setIsActive(prevValue => ({ ...prevValue, watchlist: true }))} onBlur={() => setIsActive(prevValue => ({ ...prevValue, watchlist: false }))}>
                  {isActive.watchlist ?
                     <i className="ri-heart-fill ri-fw ri-2x" style={{ color: '#AD241B' }}></i> :
                     <i className="ri-heart-line ri-fw ri-2x"></i>}
                  <p className="navigation--title"> Watchlist</p>
               </Link>
            </li>
            <li>
               <Link to="/new" className={`nav--link ${theme}`} onFocus={() => setIsActive(prevValue => ({ ...prevValue, new: true }))} onBlur={() => setIsActive(prevValue => ({ ...prevValue, new: false }))}>
                  {isActive.new ?
                     <i className="ri-calendar-2-fill ri-fw ri-2x" style={{ color: '#AD241B' }}></i> :
                     <i className="ri-calendar-2-line ri-fw ri-2x"></i>}
                  <p className="navigation--title">New Releases</p>
               </Link>
            </li>
            <li>
               <Switch />
            </li>
         </ul>
      </nav >
   );
}

export default Navigation;