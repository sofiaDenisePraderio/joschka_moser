import './App.scss';
import { Container } from 'react-bootstrap';
import { Header } from '../src/components/Header';
import { ImagesCollection } from '../src/components/ImagesCollection';
import { Carousel } from '../src/components/Carousel'

function App() {
  return (
    <div>
      <Container className="px-4 py-4">
        <Carousel />
      </Container>
    </div>
  );
}

export default App;
