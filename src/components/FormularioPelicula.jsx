import { useForm } from "react-hook-form"
import { Button, Container, Form } from 'react-bootstrap';
import Peliculas from "./Peliculas";
import { useState } from "react";


const FormularioPelicula = () => {

  const [nombrePelicula, setNombrePelicula] = useState('');
  const [descripcion, setDescripcion] = useState('')
  const [genero, setGenero] = useState('')


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =>{

    const nombrePelicula = data["Nombre Pelicula"];
    const descripcion = data["Descripción"];
    const genero = data["genero"]

    console.log("Nombre Pelicula", nombrePelicula)
    console.log("Descripción", descripcion)
    console.log("genero", genero)

    


  };
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
          <Form.Select   
          className="form-select"
          {...register("genero",
           { required: true 
           })}>
              <option value="">Selecciona un género</option>
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

           
           <Peliculas/>

    </Container>
  );
};

export default FormularioPelicula;

