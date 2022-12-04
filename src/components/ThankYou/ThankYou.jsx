import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const idOrder = useParams().idOrder;

  return (
    <div style={{ color: "#ffa300",width:'100%', height:'80vh', display:'flex', justifyContent:'center', alignItems:'center' }}>
      <h3>
      Su orden de compra ha sido recibida,<p> nos comunicaremos a la brevedad</p><p>ID COMPRA N°:<p> <strong>{idOrder}</strong></p></p>
      </h3>
    </div>
  );
}

export default ThankYou;
