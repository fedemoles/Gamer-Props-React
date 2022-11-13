import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./Item.css";

function Item({title,imgurl,price,color}) {
  return (
    <div className="card">
        <ToggleButton icon="♥"/>
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <MyButton color={color}>Ver Más</MyButton>
    </div>
  );
}

//<MyButton color="darkgrey"> Ver Más </MyButton> --> children

export default Item;