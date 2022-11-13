import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemCount/Item";
import getItems from "../../Services/MockService";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setProducts(respuestaDatos);
    });
  }, []);

  return (
    <div>
      <h1 className="nombreApp animate__animated animate__bounceIn animate__delay-1s">
        {greeting}
      </h1>
      <ItemCount />
      <div className="item-list">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              imgurl={product.imgurl}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
