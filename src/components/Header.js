import { Link } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
   return (
      <div className={classes.headerWrapper}>
         <div className={classes.header}>
            <div className={classes.logo}>
               <a href='#'>
                  <img src='/img/book keeper.svg' alt='logo' />
               </a>
            </div>
            <nav className={classes.navigation}>
               <Link to='/'>Home</Link>
               <Link to='/futureReads'>Future reads</Link>
               {/* <a href='#'>Home</a>
               <a href='#'>Future Reads</a> */}
            </nav>
         </div>
      </div>
   );
}

export default Header;