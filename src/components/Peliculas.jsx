import Swal from 'sweetalert2';
import { Button, ListGroup, Card, Container, Col ,Row } from 'react-bootstrap';



const Peliculas = ({ peliculas, borrarPelicula }) => {
  const confirmarBorrarPelicula = (pelicula) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#116A7B',
      cancelButtonColor: '#a44747',
      confirmButtonText: 'Sí, Borrar',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'container-alert',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        borrarPelicula(pelicula);
        mostrarMensajeBorrado();
      }
    });
  };

  const mostrarMensajeBorrado = () => {
    Swal.fire({
      title: '¡Borrado!',
      text: 'La película ha sido eliminada',
      icon: 'success',
      confirmButtonColor: '#116A7B',
      customClass: {
        popup: 'container-alert'
      }
    });
  };

  return (
    <>
      <Container className=''>
        <Row xs={1} md={2} lg={4}>
        {
          peliculas.length > 0 ? (
            peliculas.map((pelicula, posicionPelicula) => (
              <Col key={posicionPelicula} className='my-3'>
                <Card className='bg bg-dark text-light h-100 d-flex flex-column'>

                  <Card.Img variant="top" src={pelicula.rutaImg} className='img-fluid card-img w-100 h-100' />

                  <Card.Body className="mt-auto" >
                  <Card.Title>{pelicula.nombrePelicula}</Card.Title>
                  <Card.Text>
                    Descripción:{pelicula.descripcion}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg bg-dark text-light ">
                    <ListGroup.Item className=' bg bg-dark text-light'>Género:{pelicula.genero}</ListGroup.Item>
                </ListGroup>
                  <Card.Body className="mt-auto">
                    <Button onClick={() => confirmarBorrarPelicula(pelicula)} variant="danger">Borrar Pelicula</Button>
                </Card.Body>
              </Card>
              </Col>
            ))
          ) : (

            <Card.Body>
              <Card.Title className='py-3 my-3 bg bg-body-tertiary border-title text-center rounded-2 '>No hay Peliculas Cargadas</Card.Title>
            </Card.Body>

          )
        }
        </Row>
      </Container>
    </>
  );
}


export default Peliculas;