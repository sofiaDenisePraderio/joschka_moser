import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ImagesCollection } from '../src/components/ImagesCollection';
import { Header } from '../src/components/Header';
import './index.css';
import './custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Container style={{marginTop: "75px"}}>
        <Header />
        <Routes>
          <Route path="/projects/:project" element={<ImagesCollection />} />
          <Route path="/" element={<App />} />
          <Route path="*" element={<div>ay no!</div>} />
        </Routes>
      </Container>
    </Router>
  </React.StrictMode>
);