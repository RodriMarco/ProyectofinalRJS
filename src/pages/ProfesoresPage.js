import '../styles/components/pages/Profesores.css';
import { HashLink as Link } from 'react-router-hash-link';

const ProfesoresPage = (props) => {
    return (
        <section id="cuerposecc2">
  <div class="grillaprofes">
    <h2 id="titulosecc2">Elegi a tu proximo profesor!</h2>
    <div id="Profe1">
      <img class="imgredonda" src="Imagenes/ProfeEva.jpg"  alt=""></img>
      <h2>Eva Jacome</h2>
      <h3>KickBoxing</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe2">
      <img class="imgredonda" src="Imagenes/ProfeJuan.jpg" alt=""></img>
      <h2>Juan Baigorria</h2>
      <h3>KickBoxing</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe3">
      <img class="imgredonda" src="Imagenes/ProfeManu.jpg" alt=""></img>
      <h2>Emanuel Azuaga</h2>
      <h3>KickBoxing</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe4">
      <img class="imgredonda" src="Imagenes/ProfeTonio.jpg" alt=""></img>
      <h2>Antonio Navarro</h2>
      <h3>Boxeo / KickBoxing</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe5">
      <img class="imgredonda" src="https://dummyimage.com/250" alt=""></img>
      <h2>Prueba</h2>
      <h3>Prueba</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe6">
      <img class="imgredonda" src="https://dummyimage.com/250" alt=""></img>
      <h2>Prueba</h2>
      <h3>Prueba</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe7">
      <img class="imgredonda" src="https://dummyimage.com/250" alt=""></img>
      <h2>Prueba</h2>
      <h3>Prueba</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe8">
      <img class="imgredonda" src="https://dummyimage.com/250" alt=""></img>
      <h2>Prueba</h2>
      <h3>Prueba</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe9">
      <img class="imgredonda" src="https://dummyimage.com/250" alt=""></img>
      <h2>Prueba</h2>
      <h3>Prueba</h3>
      <Link to="/Clases#horarios">Ver horarios</Link>
    </div>
  </div>
  <img src='Imagenes/iconos2.png'></img>
</section>
    );
}

export default ProfesoresPage;