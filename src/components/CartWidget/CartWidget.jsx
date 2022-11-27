import React, { useContext } from 'react'
import './CartWidget.css'
import { BsCart3 } from "react-icons/bs";
import { cartContext } from "../Context/cartContext";

const CartWidget = () => {
      //3. Inicializamos el contexto deseado
  const miContext = useContext(cartContext);

    return (
        <div className="animate__animated animate__fadeInRight animate__delay-1s"><BsCart3 className="carritoLogo" />
            <span className="cartMenuNum">{miContext.itemsInCart()}</span>
        </div>
    );
}

export default CartWidget