import '../../styles/components/layout/header.css'

import BarNav from './BarNav.Js';
const Header = (props) => {
  return (
    <div className='grilla1'> 
      
      <div id="div-logo">
        <img src="Imagenes/logo.png" alt="logo gimnasio" />
      </div>

      <div id="Secc">
        <BarNav/>
      </div>
    </div>
  );
}

export default Header;