import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import '../styles/components/pages/Novedades.css'

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect( () => {
      const cargarNovedades = async () => {
        setLoading(true);
        const response =await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
        setNovedades(response.data);
        setLoading(false);
      };

      cargarNovedades();
    },[]);
    
    return(
      <section className="holder" >
        <h2 >
          Novedades
        </h2>
      <section id='novedades'>
      {loading ? 
            (
            <p >Cargando...</p>
            ) :(
                novedades.map(item=> <NovedadItem key={item.id}
                title={item.titulo} notice={item.cuerpo} date={item.fecha} image={item.imagen}/>)
              )
          }
      </section>  
      </section>
    );
}

export default NovedadesPage;