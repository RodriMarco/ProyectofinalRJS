import '../../styles/components/layout/header.css'

import Navigation from './Navigation';
const Header = (props) => {
  return (
    <div className='grilla1'> 
      
      <div id="div-logo">
        <img src="Imagenes/logo.png" alt="logo gimnasio" />
      </div>

      <div id="Secc">
       <Navigation />
      </div>
    </div>
  );
}

export default Header;