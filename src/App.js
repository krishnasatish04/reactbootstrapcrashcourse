import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Badge} from 'react-bootstrap'
import Counter from './components/Counter';
import Register from './components/Register'
function App() {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="dark">
        <Container>
          <Navbar.Brand href="#" ><Badge variant="primary">React bootstrap</Badge></Navbar.Brand>

        </Container>
      </Navbar>
      {/* <Counter/> */}
      <Register/>
    </>
  );
}

export default App;
