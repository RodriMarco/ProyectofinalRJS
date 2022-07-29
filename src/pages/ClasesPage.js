
import '../styles/components/pages/Clases.css'

import Table from 'react-bootstrap/Table';

const ClasesPage = (props) => {
    return (

        <Table striped className='table'>
            
            {/* <a name="horarios"></a> */}
            <thead>
                <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miercoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                    <th scope="col">Sabado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">10:30 a 11:30</th>
                    <td>Kick Boxing (Manu)</td>
                    <td>Boxeo (Gaston)</td>
                    <td>Kick Boxing (Manu)</td>
                    <td>Boxeo (Gaston)</td>
                    <td>Kick Boxing (Manu)</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">16:00 a 17:30</th>
                    <td>KickBoxing (Juan)</td>
                    <td></td>
                    <td>KickBoxing (Juan)</td>
                    <td></td>
                    <td>KickBoxing (Juan)</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">17:00 a 18:00</th>
                    <td></td>
                    <td>Crosstraining (Edu)</td>
                    <td></td>
                    <td>Crosstraining (Edu)</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">17:30 a 19:00</th>
                    <td>Kick Boxing (Eva)</td>
                    <td></td>
                    <td>Kick Boxing (Eva)</td>
                    <td></td>
                    <td>Kick Boxing (Eva)</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">19:00 a 20:30</th>
                    <td>Boxeo/kick (Antonio)</td>
                    <td>Boxeo (Fabio)</td>
                    <td>Boxeo/kick (Antonio)</td>
                    <td>Boxeo (Fabio)</td>
                    <td>Boxeo/kick (Antonio)</td>
                    <td>Boxeo (Fabio)</td>
                </tr>
                <tr>
                    <th scope="row">20:30 a 22:00</th>
                    <td>Funcional Box (Ivo)</td>
                    <td>Kick Boxing (Rodrigo)</td>
                    <td>Funcional Box (Ivo)</td>
                    <td>Kick Boxing (Rodrigo)</td>
                    <td>Funcional Box (Ivo)</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>

    );
}

export default ClasesPage;