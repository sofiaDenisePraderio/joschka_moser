import './App.scss';
import { Container } from 'react-bootstrap';

function App() {
  return (
      <Container style={{maxHeight: '90vh', overflow: 'hidden'}}>
        <img
        loading="lazy"
        alt=""
          src={`/joschka_moser/images/banner/fuchs.jpeg`}
          style={{
            width: '100%',
            height: 'auto',
            overflow: 'hidden'
          }} />
      </Container>
  );
}

export default App;
