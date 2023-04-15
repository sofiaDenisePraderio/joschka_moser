import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ImagesCollection } from '../src/components/ImagesCollection';
import { Header } from '../src/components/Header';
import { Info } from '../src/components/Info';
import './index.css';
import './custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Container style={{ marginTop: "75px" }}>
        <Header />
        <Routes>
          <Route path="/projects/:project" element={<ImagesCollection />} />
          <Route path="/*"  element={<App />} />
          <Route path="/home"  element={<App />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<div mt={4}>oops! this in a error, please go to main again or reload the browser</div>} />
          <Route exact path="/" element={<Navigate to="/home"/>} />
        </Routes>
      </Container>
    </HashRouter>
  </React.StrictMode>
);