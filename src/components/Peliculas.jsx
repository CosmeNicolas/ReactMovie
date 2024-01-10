import { Button, ListGroup, Card } from 'react-bootstrap';
import cine from '../assets/cine.jpeg'


const Peliculas = () => {
  return (
    <>

      <Card  className='d-flex flex-row  my-3'>
      <div>
        <Card.Img variant="top" src={cine} className='img-fluid' />
        </div>
        <div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </div>
      </Card>
      
    </>
    );
  }


export default Peliculas;