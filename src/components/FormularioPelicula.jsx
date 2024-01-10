
import { useForm } from "react-hook-form"

import { Button, Container, Form } from 'react-bootstrap';

const FormularioPelicula = () => {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors) 


  return (
    <Container d-flex align-item-center>
      <Form className="p-3">
        {/* Nombre Pelicula */}
        <Form.Group className="mb-3" onSubmit={handleSubmit(onSubmit) }>
          <Form.Label>Nombre de Pelicula</Form.Label>
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
          <Form.Label>Descripción</Form.Label>
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
          {...register("Género",
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
            <Button variant="dark" type='submit'>
              Crear Pelicula
            </Button>
        </Form>
    
    </Container>
  );
};

export default FormularioPelicula;

