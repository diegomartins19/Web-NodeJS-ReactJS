import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './componentes/contador'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Container fluid = "md">
            <h1>Contador de Pessoas</h1>
            <sub>Dev: Diego Martins Fernandes N546AA0</sub>
            <hr />
            <Contador />
          </Container>
        </header>
      </div>
  );
}

export default App;