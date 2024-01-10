import { useForm } from "react-hook-form"
import { Button, Container, Form ,Card} from 'react-bootstrap';
import Peliculas from "./Peliculas";

const FormularioPelicula = () => {




  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors) 


  return (
    <Container >
      <Form className="p-3" onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre Pelicula */}
        <Form.Group className="mb-3" >
          <Form.Label className="text-light">Nombre de Pelicula</Form.Label>
            <Form.Control type="text"
             placeholder="Nombre Pelicula"
              {...register("Nombre Pelicula", 
              { required: true, 
              max: 50, 
              min: 3, 
              maxLength: 50 
              })} />
          
        </Form.Group>
          {/* Descripcion */}
        <Form.Group className="my-3">
          <Form.Label className="text-light">Descripción</Form.Label>
            <Form.Control
             as="textarea"
             rows={4}
             type="text" placeholder="Descripción"
             {...register("Descripción", 
             { required: true,
              max: 50,
              min: 3,
              maxLength: 50
             })} />
        </Form.Group>

          {/* select */}
        <Form.Group className="mb-3">
          <Form.Select disabled  
          {...register("genero",
           { required: true 
           })}>
              <option value="Drama">Drama</option>
              <option value="Comedia">Comedia</option>
              <option value="Suspenso">Suspenso</option>
              <option value="Terror">Terror</option>
              <option value="Amor">Amor</option>
              <option value="Documental">Documental</option>
          </Form.Select>
        </Form.Group>

           {/* boton */}
           <div className="text-center">
            <Button variant="dark" type='submit'>
              Crear Pelicula
            </Button>
           </div>
        </Form>

            {/* parrafo no hay peliculas cargadas */}
      <Card.Body>
        <Card.Title className='py-3 my-3 bg bg-body-tertiary border-title text-center rounded-2 '>No hay Peliculas Cargadas</Card.Title>
      </Card.Body>
           
           <Peliculas/>

    </Container>
  );
};

export default FormularioPelicula;

