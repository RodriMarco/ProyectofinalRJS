import '../styles/components/pages/Profesores.css';
import { HashLink as Link } from 'react-router-hash-link';

const ProfesoresPage = (props) => {
    return (
        <section id="cuerposecc2">
          <h2 id="titulosecc2">Elegi a tu proximo profesor!</h2>
  <div class="grillaprofes" id='profesores'>
    
    <div id="Profe1"> 
      <img class="imgredonda" src="Imagenes/ProfeEva.jpg"  alt=""></img>
      <h2>Eva Jacome</h2>
      <h3>KickBoxing</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe2">
      <img class="imgredonda" src="Imagenes/ProfeJuan.jpg" alt=""></img>
      <h2>Juan Baigorria</h2>
      <h3>KickBoxing</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe3">
      <img class="imgredonda" src="Imagenes/ProfeManu.jpg" alt=""></img>
      <h2>Enmanuel Azuaga</h2>
      <h3>KickBoxing</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe4">
      <img class="imgredonda" src="Imagenes/ProfeTonio.jpg" alt=""></img>
      <h2>Antonio Navarro</h2>
      <h3>Boxeo / KickBoxing</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe5">
      <img class="imgredonda" src="Imagenes/ProfeRodri" alt=""></img>
      <h2>Rodrigo Marcó</h2>
      <h3>Kickboxing</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe6">
      <img class="imgredonda" src="Imagenes/ProfeFabio.jpg" alt=""></img>
      <h2>Fabio Nunez</h2>
      <h3>Boxeo</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe7">
      <img class="imgredonda" src="Imagenes/ProfeIvo.jpg" alt=""></img>
      <h2>Ivan Hamra</h2>
      <h3>Funcional Box</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>
    <div id="Profe8">
      <img class="imgredonda" src="https://dummyimage.com/250" alt=""></img>
      <h2>Eduardo</h2>
      <h3>CrossTraining</h3>
      <Link class='Link' to="/Clases#horarios">Ver horarios</Link>
    </div>

  </div>
  <img src='Imagenes/iconos2.png' id='iconos'></img>
</section>
    );
}

export default ProfesoresPage;