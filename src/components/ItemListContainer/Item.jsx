import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({title, imgurl, price, stock, color, id, discount }) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = { color: discount && "green" };
  
  return (
    <div className="card">
        <ToggleButton icon="♥"/>
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <h4 style={stylePrice} className="priceTag">$ {price}</h4>
        {/* 3. Operador && */}
        {discount && <small>Descuento: {discount}</small>}
        {stock <= 0 && <span>Sin stock disponible</span>}

      </div>

      <Link to={urlDetail}style={{ color:"#c501e2"}}>
        <MyButton onTouchButton ={() => console.log("click")} colorBtn={stock <= 0 && "red"}>
          Ver Producto
        </MyButton>
      </Link>
    </div>
  );
}

//<MyButton color="darkgrey"> Ver Más </MyButton> --> children

export default Item;