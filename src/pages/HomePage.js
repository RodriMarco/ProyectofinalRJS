import '../styles/components/pages/HomePage.css'
import { useState} from 'react';
import axios from 'axios';

const HomePage = (props) => {
    
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
        const{name, value} = e.target;
        setFormData(oldData=> ({
            ...oldData,
            [name]: value
        }));
    }
    
    const handleSubmit = async e =>{
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm);
        }
    }

    return (
        <div id="grillainicio">
            <section id="inicio">
                <h1>
                    Iron Boxing Club
                </h1>
            </section>
            <div id="div-mapa">
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.071938631017!2d-58.44960108419004!3d-34.602342364933705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0ec736c165%3A0x90459508e3cbf126!2sOlaya%201650%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1653265388838!5m2!1sen!2sar"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"/> */}
            </div>
            <div id="div-contacto">
                <h2>Contactate con nosotros:</h2>
                <form className='formulario' onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} cols="30" rows="10"></textarea>
                    </p>
                    {sending ? <p>Enviando ...</p> : null}
                    {msg ? <p>{msg}</p>: null}
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
                
            </div>
        </div>

    );
}

export default HomePage;