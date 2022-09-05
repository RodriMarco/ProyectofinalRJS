import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HorariosItem from '../components/horarios/HorariosItems';


import '../styles/components/pages/Clases.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from 'react-bootstrap/Carousel';

import Table from 'react-bootstrap/Table';


const ClasesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        const cargarHorarios = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/horarios`);
            setHorarios(response.data);
            setLoading(false);
        };

        cargarHorarios();
    }, []);


    return (

        <section>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Imagenes/cross.png"
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
                        src="Imagenes/kick.jpg"
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
                        src="Imagenes/box.jpg"
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
                <Row className="justify-content-md-center">
                    <Col md="auto"> <Table className='table' id="horarios">

                        <thead>
                            <tr>
                                <th>Horario</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miercoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                                <th>Sabado</th>
                            </tr>
                        </thead>
                        {loading ?
                            (
                                <p >Cargando...</p>
                            ) : (
                                horarios.map(item => <HorariosItem key={item.id}
                                    time={item.horario} day1={item.dia1} day2={item.dia2} day3={item.dia3} day4={item.dia4} day5={item.dia5} day6={item.dia6} />)
                            )
                        }
                    </Table>
                    </Col>


                </Row>

            </section>
        </section>
    );
}

export default ClasesPage;