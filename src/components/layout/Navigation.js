import NavLinks from './NavLinks';
import '../../styles/components/layout/header.css';
import {MdOutlineMenu} from 'react-icons/md'
import {CgClose} from 'react-icons/cg'
import { useState } from 'react';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    
    const hamburgerIcon = <MdOutlineMenu className='Hamburger' size='40px' color='white' onClick={() => setOpen(!open)}></MdOutlineMenu>

    const closeIcon = <CgClose className='Hamburger' size='40px' color='white' onClick={() => setOpen(!open)}></CgClose>

    const closeMenu = () => setOpen(false);

    return(
    <nav className='Navigation'>
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMenu={true} closeMenu={closeMenu}/>}
     </nav>
    );
}

export default Navigation;