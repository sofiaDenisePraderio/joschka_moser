import './App.scss';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container className="px-4 py-4">
        <img
          src={`/images/banner/fuchs.jpeg`}
          style={{
            width: '100%',
          }} />
      </Container>
    </div>
  );
}

export default App;
