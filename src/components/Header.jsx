import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container className="hero-section-container" style={{ 
      position: "fixed",
      top: 0,
      zIndex: 9999
    }}>
      <Row className="h-100">
        <Col xs md="8" className="d-flex flex-column justify-content text-start px-0">
          <div className="py-4">
            <div className="btns-wrapper">
              <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px"}}><Link to="/" style={{ textDecoration: "none"}}>Joschka Moser</Link></Button>
              <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px"}}><Link to="/projects/main">Projects</Link></Button>
              <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px"}}><Link to="/info" style={{ textDecoration: "none"}}>Info</Link></Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}