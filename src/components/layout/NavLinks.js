import { Link } from "react-router-dom";
import {motion} from 'framer-motion';


const NavLinks = (props) => {
const animateFrom = {opacity: 0, y:-111}
const animateTo = {opacity: 1, y:0}

    return (
        <ul id="Secciones">
            <motion.li 
            initial = {animateFrom}
            animate  = {animateTo}
            transition ={{delay:0.05}}
            onClick={() => props.isMenu && props.closeMenu()}><Link to="/" >Inicio</Link></motion.li>
            <motion.li 
            initial = {animateFrom}
            animate  = {animateTo}
            transition ={{delay:0.10}}
            onClick={() => props.isMenu && props.closeMenu()}><Link to="Clases">Clases</Link></motion.li>
            <motion.li
            initial = {animateFrom}
            animate  = {animateTo}
            transition ={{delay:0.15}}
            onClick={() => props.isMenu && props.closeMenu()}><Link to="Profesores">Profesores</Link></motion.li>
            <motion.li 
            initial = {animateFrom}
            animate  = {animateTo}
            transition ={{delay:0.20}}
            onClick={() => props.isMenu && props.closeMenu()}><Link to="Equipos">Equipos</Link></motion.li>
            <motion.li 
            initial = {animateFrom}
            animate  = {animateTo}
            transition ={{delay:0.25}}
            onClick={() => props.isMenu && props.closeMenu()}><Link to="Novedades">Novedades</Link></motion.li>
        </ul>
    );
}

export default NavLinks;