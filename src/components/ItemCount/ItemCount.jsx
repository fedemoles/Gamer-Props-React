import { useState } from "react";
import "./ItemCount.css";
import MyButton from "../MyButton/MyButton";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="cantidadProductos">
        <MyButton onTouchButton={handleSubstract}>-</MyButton>
        <span>{count}</span>
        <MyButton onTouchButton={handleAdd}>+</MyButton>
      </div>
      <div className="tituloProducto">
        {/* 3. agregar un onClick con el evento recibido por Props */}
        <MyButton onTouchButton={() => onAddToCart(count)}>
          Agregar al carrito
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCount;
