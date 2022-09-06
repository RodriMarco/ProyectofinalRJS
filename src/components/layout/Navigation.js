import NavLinks from './NavLinks';
import classes from '../../styles/components/layout/header.css';

const Navigation = () => {
    return(
    <nav className={classes.Navigation}>
        <NavLinks/>
     </nav>
    );
}

export default Navigation;