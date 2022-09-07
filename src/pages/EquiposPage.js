import '../styles/components/pages/Equipos.css'



const EquiposPage = (props) => {
  return (
    <section>
    
    <div className="Container">
      <div>
        <img src="../Imagenes/LogoTMT.jpg" alt="logo TMT" className="imgredonda"></img>
      </div>
      <div>
        <p className="descequipos">
        Somos un equipo de kickboxing iniciado por Eva Jacome Richter (3er dan WAKO) en el año 2012, ubicado en Buenos Aires, Argentina. De forma competitiva y recreativa, practicamos los distintos estilos que abarcan el deporte: full contacto, kickboxing y K1 Style. 
Creemos que el acceso al deporte es parte de la Salud integral y nuestro team está abierto a todas las personas que quieran practicarlo sin diferenciar género, origen, edad, capacidades.
Actualmente nos pueden encontrar en Ironboxing Club, en Villa Crespo, CABA.
        </p>
      </div>
    </div>
    <div className="Container">
      <div>
        <p className="descequipos">
          Centro de entrenamiento, con especialización en deportes de combate para todos los niveles, desde recreativo hasta en deportistas de alto rendimiento.
        </p>
      </div>
      <div>
        <img src="../Imagenes/logo.jpg" alt="logo TMT" className="imgredonda"></img>
      </div>
    </div>
    </section>
  );
}

export default EquiposPage;
