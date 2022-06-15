import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div> 
      {/* className="grilla1" */}
      <div id="div-logo">
        <Link to="/"><img src="Imagenes/logo.png" alt="logo gimnasio" /></Link>
      </div>

      <div id="Secc">
        <ul id="Secciones">
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