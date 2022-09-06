import NavLinks from './NavLinks';
import classes from '../../styles/components/layout/header.css';
import {MdOutlineMenu} from 'react-icons/md'

const Navigation = () => {
    return(
    <nav className={classes.Navigation}>
        <MdOutlineMenu className='Hamburger' size='40px' color='white' onClick={() => console.log("you click")}></MdOutlineMenu>
        <NavLinks/>
     </nav>
    );
}

export default Navigation;