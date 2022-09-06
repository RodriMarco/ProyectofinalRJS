
import classes from '../../styles/components/layout/header.css';
import Navigation from './Navigation'

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <nav>
               <Navigation/>
            </nav>
        </div>

    );
}

export default NavBar;