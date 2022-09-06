import '../../styles/components/layout/header.css'
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className='grilla1'> 
      
      <div id="div-logo">
        <img src="Imagenes/logo.png" alt="logo gimnasio" />
      </div>

      <div id="Secc">
        <ul id="Secciones">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="Clases">Clases</Link></li>
          <li><Link to="Profesores">Profesores</Link></li>
          <li><Link to="Equipos">Equipos</Link></li>
          <li><Link to="Novedades">Novedades</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;