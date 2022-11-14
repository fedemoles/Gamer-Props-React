import { useState, useEffect } from "react";
import { getOneItem } from "../../Services/MockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  /* const paramsUrl = useParams();
  const id = paramsUrl.id; */
  const { idItem } = useParams();
  console.log(useParams());

  async function getItemsAsync() {
    let respuesta = await getOneItem(idItem);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;