import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const idOrder = useParams().idOrder;

  return (
    <div style={{ color: "#ffa300" }}>
      <h2>Su orden de compra ha sido recibida, nos comunicaremos a la brevedad</h2>
      <h3>
         ID COMPRA N°: <strong>{idOrder}</strong>
      </h3>
    </div>
  );
}

export default ThankYou;
