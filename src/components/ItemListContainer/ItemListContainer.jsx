import { useState, useEffect } from "react";
import "./ItemListContainer.css";
//import ItemCount from "../ItemCount/ItemCount";
//import Item from "./Item";
import getItems from "../../Services/MockService";
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
      let respuesta = await getItems(idCategory);
      setProducts(respuesta);
    }
  
    useEffect(() => {
      getItemsAsync();
      return () => {
        console.log("Componente desmontado");
      };
    }, [idCategory]);
  
    // 1. Render Condicional con operador ternario + Spinner
    return (
      <div className="catalogo">
        {products ? <ItemList products={products} /> : <Loader />}
  
      </div>
    );
  }
  
  export default ItemListContainer;
  
