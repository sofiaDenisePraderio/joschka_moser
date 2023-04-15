import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          backgroundColor: 'white',
          width: '100%',
          padding: '15px 0px 15px 8%',
        }}>
        <div className="d-flex justify-content text-start">
          <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px" }}><Link to="/home" style={{ textDecoration: "none" }}><b>Joschka Moser</b></Link></Button>
          <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px" }}><Link to="/projects/main" style={{ textDecoration: "none" }}>Projects</Link></Button>
          <Button variant="secondary" style={{ borderRadius: "0px", marginRight: "5px" }}><Link to="/info" style={{ textDecoration: "none" }}>Info</Link></Button>
        </div>
      </div>

  )
}