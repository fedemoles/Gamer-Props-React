import React from "react";
//import Container from 'react-bootstrap/Container';
import NavBar from "react-bootstrap/Navbar";
import { FaUserAstronaut } from "react-icons/fa";
import { FaGrav } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget";
import NavLinks from "../NavLinks/NavLinks";
import "./NavBar.css";
import { Link } from "react-router-dom";

function barraNav() {
  return (
    <NavBar sticky="top" className="navContainer">
      <div className="navLogo animate__animated animate__fadeIn animate__delay-1s">
          
          <Link to="/"
            className="containerDibu animate__animated animate__fadeInLeft animate__delay-1s">
            <img className="imgLogo" src="../img/logo.png" alt="Logo Gamer" />
          </Link>

        <div className="envios animate__animated animate__fadeInDown animate__delay-1s">
          <FaGrav />
          <p>NEXT GENERATION OF GAMERS</p>
          <FaUserAstronaut />
        </div>
        <CartWidget />
      </div>
      <NavLinks />
    </NavBar>
  );
}

export default barraNav;
