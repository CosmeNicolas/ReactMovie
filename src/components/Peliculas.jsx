import { Button, ListGroup, Card } from 'react-bootstrap';



const Peliculas = ({peliculas, borrarPelicula}) => {
  return (
    <>
      {
        peliculas.length > 0 ? (
          peliculas.map((pelicula,posicionPelicula)=>(
            <Card key={posicionPelicula} className='d-flex flex-row  my-3'>
              <div>
                <Card.Img variant="top" src={pelicula.rutaImg} className='img-fluid card-img' />
              </div>
              <div>
                <Card.Body>
                  <Card.Title>{pelicula.nomrePelicula}</Card.Title>
                  <Card.Text>
                   {pelicula.descripcion}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{pelicula.genero}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button onClick={()=>borrarPelicula(pelicula)} variant="dark">Borrar Pelicula</Button>
                </Card.Body>
              </div>
            </Card>
          ))
        ) : (
   
       <Card.Body>
        <Card.Title className='py-3 my-3 bg bg-body-tertiary border-title text-center rounded-2 '>No hay Peliculas Cargadas</Card.Title>
      </Card.Body> 

        )
      }
      
    </>
    );
  }


export default Peliculas;