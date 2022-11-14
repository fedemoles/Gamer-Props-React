import React from "react";
import Nav from "react-bootstrap/Nav";
import "./NavLinks.css";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="containerLinks">
      <Nav className="menuNav animate__animated animate__fadeIn animate__delay-1s">
        <Nav.Link as={Link} to="/category/motherboard">
          MOTHERBOARD
        </Nav.Link>
        <Nav.Link as={Link} to="/category/processor">
          PROCESSOR
        </Nav.Link>
        <Nav.Link as={Link} to="/category/memory">
          MEMORY
        </Nav.Link>
        <Nav.Link as={Link} to="/category/storage">
          SSD/M2/HDD
        </Nav.Link>
        <Nav.Link as={Link} to="/category/gpu">
          GPU
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NavLinks;
