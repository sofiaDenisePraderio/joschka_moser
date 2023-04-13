import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container  >
      <Row className="w-100" style={{
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
      backgroundColor: 'white',
      width: '100%',
      paddingLeft: '10%'
    }}>
        <Col className="d-flex flex-column justify-content text-start px-0">
          <div className="py-4">
            <div className="btns-wrapper">
              <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px" }}><Link to="/" style={{ textDecoration: "none" }}><b>Joschka Moser</b></Link></Button>
              <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px" }}><Link to="/projects/main" style={{ textDecoration: "none" }}>Projects</Link></Button>
              <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px" }}><Link to="/info" style={{ textDecoration: "none" }}>Info</Link></Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}