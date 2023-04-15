import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ImagesCollection } from '../src/components/ImagesCollection';
import { Header } from '../src/components/Header';
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
          <Route path="/info" element={<div>Joschka Moser is a photographer based in Berlin and Freiburg.In 2022 he graduated from Lette Verein Berlin, working as a freelance photographer since then. His work is often linked to social aspects while having a big love for the everyday aspect of photography.
            For any kinds of inquiries feel free to contact him

            @joschka_moser
            +49 15157837059
            joschka.moser@web.de</div>} />
          <Route path="*" element={<div mt={4}>oops! this in a error, please go to main again or reload the browser</div>} />
        </Routes>
      </Container>
    </HashRouter>
  </React.StrictMode>
);