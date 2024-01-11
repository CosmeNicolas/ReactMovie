import { useForm } from "react-hook-form"
import { Button, Container, Form } from 'react-bootstrap';
import Peliculas from "./Peliculas";
import { useEffect, useState } from "react";



const FormularioPelicula = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const peliculasGuardadas = JSON.parse(localStorage.getItem('guardarPelicula')) || [];
  const [peliculas, setPeliculas] = useState(peliculasGuardadas);

  const borrarPelicula = (nombrePelicula)=>{
    const tomarPelicula = peliculas.filter((pelicula)=> pelicula !== nombrePelicula);
    setPeliculas(tomarPelicula)
  }

  useEffect(() => {
    localStorage.setItem('guardarPelicula',JSON.stringify(peliculas))
  }, [peliculas])
  

  const onSubmit = (data) => {

    const nuevaPelicula = {
      nombrePelicula: data["Nombre Pelicula"],
      descripcion: data["Descripcion"],
      genero: data["genero"],
      rutaImg: data["rutaImg"]
    };
    console.log(nuevaPelicula)
    console.log(errors)

    setPeliculas([...peliculas, nuevaPelicula])
    reset();
  };

    return (
      <Container >
        <Form className="p-3" onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre Pelicula */}
          <Form.Group className="mb-3" >
            <Form.Label className="text-light">Nombre de Pelicula</Form.Label>
            <Form.Control type="text"
              placeholder="Nombre Pelicula"
              {...register("Nombre Pelicula",
                {
                  required: true,
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
              {...register("Descripcion",
                {
                  required: true,
                  min: 3,
                  maxLength: 200
                })} />
          </Form.Group>

          {/* select */}
          <Form.Group className="mb-3">
            <Form.Select
              className="form-select"
              {...register("genero",
                {
                  required: true
                })}>
              <option value="">Selecciona un género</option>
              <option value="Drama">Drama</option>
              <option value="Comedia">Comedia</option>
              <option value="Suspenso">Suspenso</option>
              <option value="Terror">Terror</option>
              <option value="Amor">Amor</option>
              <option value="Documental">Documental</option>
              <option value="Documental">Animación</option>
              <option value="Documental">Acción</option>
            </Form.Select>
          </Form.Group>

          {/* ruta de imagen */}
          <Form.Group className="my-3">
            <Form.Label className="text-light">Ingrese ruta de imagen</Form.Label>
            <Form.Control
              type="url"
              placeholder="Ingrese ruta de imagen"
              {...register("rutaImg", { required: true })}
            />
          </Form.Group>

          {/* boton */}
          <div className="text-center">
            <Button variant="dark" type='submit'>
              Crear Pelicula
            </Button>
          </div>
        </Form>
        <Peliculas peliculas={peliculas} borrarPelicula={borrarPelicula} />
      </Container>
    );
  
}
export default FormularioPelicula;

