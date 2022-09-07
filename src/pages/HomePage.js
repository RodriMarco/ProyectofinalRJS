
import '../styles/components/pages/HomePage.css'


import { Link } from "react-router-dom";



const HomePage = (props) => {

    return (
        <div id="grillainicio">
            <section id='inicio'>

            </section>

            <section id='imagenes'>
                <img id='imgportada' src='/Imagenes/Picsart_22-09-03_12-25-34-346.jpg'>
                </img>
                <img id='imgportada' src='Imagenes/Picsart_22-09-03_12-26-02-924.jpg'>
                </img>
                <img id='imgportada' src='Imagenes/Picsart_22-09-03_12-24-32-688.jpg'>
                </img>
            </section> 


         

            <section id='redes'>
                <a href="https://www.instagram.com/ironboxingclub/" target="blank"><img id='logoRedes' src='Imagenes/instagram.png'></img></a>
                <Link to="Consultas"> <img id='logoRedes' src='Imagenes/mail.png'></img></Link>
                <a href="https://goo.gl/maps/jP4xHS7ybzzapyQZA" target="blank"><img id='logoRedes' src='Imagenes/ubicacion.png'></img></a>
                <a href="https://api.whatsapp.com/send/?phone=%2B541162860478&text=Hola+c%C3%B3mo+va+%3F+Estoy+interesado+en+comenzar+a+entrenar&type=phone_number&app_absent=0" target="blank"><img id='logoRedes' src='Imagenes/whatsapp.png'></img></a>
                <a href="https://open.spotify.com/playlist/07SF3ObWXqHZo55Hf8YKeU?si=40d8db067e9148df"><img id='logoRedes' src='Imagenes/spotify.png'></img></a>
            </section>

        </div>

    );
}

export default HomePage;