import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="containerLinks">
            <Nav className="menuNav animate__animated animate__fadeIn animate__delay-1s">
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="category/motherboard">MOTHERBOARD</Nav.Link>
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="category/processor">PROCESSOR</Nav.Link>
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="category/memory">MEMORY</Nav.Link>
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="category/storage">SDD/M2/HDD</Nav.Link>
                <Nav.Link className="linkNav animate__animated animate__fadeIn animate__delay-1s" href="category/gpu">GPU</Nav.Link>
            </Nav>
        </div>
    );
}

export default NavLinks;