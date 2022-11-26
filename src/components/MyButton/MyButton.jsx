import "./MyButton.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.colorBtn);

  function handleClick() {
    setColorBtn("#aeaeeeb1");
    /* props.onTouchButton && props.onTouchButton(); */
  }

  return (
    <button
      onClick={props.onTouchButton}
      style={{ backgroundColor: colorBtn, marginBotton: "15px" }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;