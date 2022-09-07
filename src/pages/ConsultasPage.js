import { useState } from 'react';
import axios from 'axios';

import '../styles/components/pages/ConsultasPage.css'

const ConsultasPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (

            <div id="div-contacto">
                <form className='formulario' onSubmit={handleSubmit}>
                    <h1> Contactate con nosotros</h1>
                    <p>
                        <input type="text" name="nombre" placeholder='Nombre' value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <input type="text" name="email" placeholder='ejemplo@mimail.com' value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <input type="text" name="telefono"  placeholder='11xxxx-xxxx' value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <textarea name="mensaje" placeholder='Hola, queria obtener más información acerca de...' value={formData.mensaje} onChange={handleChange} cols="30" rows="8"></textarea>
                    </p>
                    {sending ? <p>Enviando ...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p>
                        <button type="submit" value="Enviar" c>Enviar</button>
                    </p>
                </form>
                <div id='iconos1'>
                    <img  src="Imagenes/iconos1.png"></img>
                </div>
                
            </div>

    );
}

export default ConsultasPage;
