
import '../styles/components/pages/Clases.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Carousel from 'react-bootstrap/Carousel';

import Table from 'react-bootstrap/Table';

const ClasesPage = (props) => {
    return (
        <section>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <h3>Cross Training</h3>
                        <p>Deporte ideal para quienes quieran trabajar todo el cuerpo en sesiones cortas pero intensas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    ></img>

                    <Carousel.Caption>
                        <h3>Kick Boxing</h3>
                        <p>Entrenamiento de Kick Boxing, Full Contact y K1-rules aptas para todos los niveles de amateur a pro.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    ></img>

                    <Carousel.Caption>
                        <h3>Boxeo</h3>
                        <p>
                        Entrenamientos de Boxeo y Funcional Box adaptadas para las necesidades de cada uno.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <section id="tabla">
                <Table  className='table' id="horarios">

                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miercoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sabado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>10:30 a 11:30</th>
                            <td>Kick Boxing (Manu)</td>
                            <td>Boxeo (Gaston)</td>
                            <td>Kick Boxing (Manu)</td>
                            <td>Boxeo (Gaston)</td>
                            <td>Kick Boxing (Manu)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>16:00 a 17:30</th>
                            <td>KickBoxing (Juan)</td>
                            <td></td>
                            <td>KickBoxing (Juan)</td>
                            <td></td>
                            <td>KickBoxing (Juan)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>17:00 a 18:00</th>
                            <td></td>
                            <td>Crosstraining (Edu)</td>
                            <td></td>
                            <td>Crosstraining (Edu)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>17:30 a 19:00</th>
                            <td>Kick Boxing (Eva)</td>
                            <td></td>
                            <td>Kick Boxing (Eva)</td>
                            <td></td>
                            <td>Kick Boxing (Eva)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>19:00 a 20:30</th>
                            <td>Boxeo/kick (Antonio)</td>
                            <td>Boxeo (Fabio)</td>
                            <td>Boxeo/kick (Antonio)</td>
                            <td>Boxeo (Fabio)</td>
                            <td>Boxeo/kick (Antonio)</td>
                            <td>Boxeo (Fabio)</td>
                        </tr>
                        <tr>
                            <th>20:30 a 22:00</th>
                            <td>Funcional Box (Ivo)</td>
                            <td>Kick Boxing (Rodrigo)</td>
                            <td>Funcional Box (Ivo)</td>
                            <td>Kick Boxing (Rodrigo)</td>
                            <td>Funcional Box (Ivo)</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </section>
    );
}

export default ClasesPage;