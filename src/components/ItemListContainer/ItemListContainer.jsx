import { useState, useEffect } from "react";
import "./ItemListContainer.css";
//import ItemCount from "../ItemCount/ItemCount";
//import Item from "./Item";
//import getItems from "../../Services/MockService";
import { getItemsByCategory, getItemsOrdered } from "../../Services/Firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

/*const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();*/

  function ItemListContainer() {
    const [products, setProducts] = useState(null);
    /* const [isLoading, setIsLoading] = useState(true) */
    const { idCategory } = useParams();
  
    async function getItemsAsync() {
      if( !idCategory ){
        let respuesta = await getItemsOrdered();
        setProducts(respuesta);
      }
      else {
        let respuesta = await getItemsByCategory(idCategory)
        setProducts(respuesta)
      }
      
    }
  
    useEffect(() => {
      getItemsAsync();
    }, [idCategory]);
  
    // 1. Render Condicional con operador ternario + Spinner
    return (
      <div className="catalogo">
        {products ? <ItemList products={products} /> : <Loader />}
  
      </div>
    );
  }
  
  export default ItemListContainer;