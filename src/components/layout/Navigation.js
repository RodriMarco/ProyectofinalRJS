import NavLinks from './NavLinks';
import classes from '../../styles/components/layout/header.css';
import {MdOutlineMenu} from 'react-icons/md'
import { useState } from 'react';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    
    return(
    <nav className={classes.Navigation}>
        <MdOutlineMenu className='Hamburger' size='40px' color='white' onClick={() => setOpen(!open)}></MdOutlineMenu>
        {open && <NavLinks/>}
     </nav>
    );
}

export default Navigation;