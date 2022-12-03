import React, { useContext } from "react";
import "./CartWidget.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/cartContext";

const CartWidget = () => {
  //3. Inicializamos el contexto deseado
  const miContext = useContext(cartContext);

  return (
    <div className="animate__animated animate__fadeInRight animate__delay-1s">
      <Link to="/cart">
        <BsCart3 className="carritoLogo" />
      </Link>
      <span className="cartMenuNum">{miContext.itemsInCart()}</span>
    </div>
  );
};

//<span className="cartMenuNum">{miContext.itemsInCart()}</span>//

export default CartWidget;
