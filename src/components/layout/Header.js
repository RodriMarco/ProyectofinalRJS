import '../../styles/components/layout/header.css'
import { Link } from "react-router-dom";
import NavBar from './NavBar'
const Header = (props) => {
  return (
    <div className='grilla1'> 
      
      <div id="div-logo">
        <img src="Imagenes/logo.png" alt="logo gimnasio" />
      </div>

      <div id="Secc">
        < NavBar/>
      </div>
    </div>
  );
}

export default Header;