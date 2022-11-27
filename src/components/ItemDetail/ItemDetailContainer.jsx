import { useState, useEffect } from "react";
import { getOneItem } from "../../Services/MockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  /* const paramsUrl = useParams();
  const id = paramsUrl.id; */
  const [isLoading, setIsLoading] = useState(true);

  const { idItem } = useParams();
  //console.log(useParams());

  async function getItemsAsync() {
    getOneItem(idItem).then( respuesta => {
      setProduct(respuesta);
      setIsLoading(false);
    })
  }

  // if


  useEffect(() => {
    getItemsAsync();
  }, []);

  // 2. if -> retorno anticipado / early return 
  if(isLoading)
    return (<Loader/>);

  return (  
     <ItemDetail product={product} />
  )
}
export default ItemDetailContainer;

