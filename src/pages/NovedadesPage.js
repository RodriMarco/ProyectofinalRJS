import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../styles/components/pages/Novedades.css'

const NovedadesPage = (props) => {
    return (
        <section>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../../Imagenes/Novedades/AzuagaMainVI.jpg" />
        <Card.Body>
          <Card.Title>Pelea SemiProfesional</Card.Title>
          <Card.Text>
          Este 16 de Julio del 22, Manuel Azuaga, peleador semiprofesional de nuestro team, se enfrentará a Matías Bava en el Main Event VI, en un combate de K1 Rules.
          </Card.Text>
          <Button variant="primary">Leer nota</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../../Imagenes/Novedades/AzuagaMainVI.jpg" />
        <Card.Body>
          <Card.Title>Pelea SemiProfesional</Card.Title>
          <Card.Text>
          Este 16 de Julio del 22, Manuel Azuaga, peleador semiprofesional de nuestro team, se enfrentará a Matías Bava en el Main Event VI, en un combate de K1 Rules.
          </Card.Text>
          <Button variant="primary">Leer nota</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../../Imagenes/Novedades/AzuagaMainVI.jpg" />
        <Card.Body>
          <Card.Title>Pelea SemiProfesional</Card.Title>
          <Card.Text>
          Este 16 de Julio del 22, Manuel Azuaga, peleador semiprofesional de nuestro team, se enfrentará a Matías Bava en el Main Event VI, en un combate de K1 Rules.
          </Card.Text>
          <Button variant="primary">Leer nota</Button>
        </Card.Body>
      </Card>

      </section>
    );
}

export default NovedadesPage;