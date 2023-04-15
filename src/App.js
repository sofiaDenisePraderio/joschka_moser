import './App.scss';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

function App() {
  const [smoothRender, setsmoothRender] = useState(true);

  useEffect(() => {
    setTimeout(() => setsmoothRender(false), 50);
  }, []);

  return (
    <Container style={{ maxHeight: '90vh', overflow: 'hidden', paddingTop: "10px ", display: 'flex', alignContent: 'center' }}>
      <img
        loading="lazy"
        src={`/joschka_moser/images/banner/fuchs.jpeg`}
        style={{
          width: '100%',
          height: 'auto',
          overflow: 'hidden',
          opacity: smoothRender ? 0 : 1,
          transition: "all 1.5s",
        }} />
    </Container>
  );
}

export default App;
