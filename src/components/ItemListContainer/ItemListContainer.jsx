import { useState, useEffect } from "react";
import "./ItemListContainer.css";
//import ItemCount from "../ItemCount/ItemCount";
import Item from "./Item";
import getItems from "../../Services/MockService";
import { useParams } from "react-router-dom";

/*const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();*/

  function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();
  

  async function getItemsAsync() {
    let respuesta = await getItems(idCategory);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);


  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            color="lightblue"
          />
        );
      })}
    </div>
  );
}


export default ItemListContainer;
