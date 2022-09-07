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
          Equipo de kick boxing a cargo de la profesora Eva Jacome Ritcher cinturón negro 3º Dan de la Federaciòn Argentina de Kick Boxing.
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
