import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import FormularioPelicula from './components/FormularioPelicula';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 

  return (
    <>
    <Container fluid className='main'>
        <h1 className='text-center text-light'>🎥Peliculas🍿</h1>
        <div>
          <FormularioPelicula/>
        </div>
    </Container>
    <Footer/>
    </>
  )
}

export default App
