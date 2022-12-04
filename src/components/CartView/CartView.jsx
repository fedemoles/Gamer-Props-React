import React, { useContext } from "react";
import { cartContext } from "../Context/cartContext";
import { createOrder } from "../../Services/Firestore";
//import { createOrder, exportArrayToFirestore } from "../../Services/Firestore";
import { useNavigate } from "react-router-dom";
import MyButton from "../MyButton/MyButton";
import './CartView.css'
import CartForm from "./CartForm";

function CartView() {
  const { cart, removeItem } = useContext(cartContext);
  let navigate = useNavigate();

  /*function handleExport(){
    exportArrayToFirestore()
  }*///--->solo se usa una vez para exportar data a firebase--->todo el catálogo//

  if (cart.length === 0)
    return (
      <div className="cart-container"style={{width:'100%', height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1>Carrito Vacío</h1>
      </div>
    );

    async function handleCheckout(evt, data) {
      // Crear nuestro objeto "orden de compra"
      const order = {
        buyer: data,
        items: cart,
        total: 0,
        date: new Date(),
      };

    const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`);
    /* ${orderId} */
    //1. Hacer un rendering condicional -> guardamos el id en un State
    //2. Sweet Alert/Notificación -> mostrando el id
    //3. Redirigir al usuario a /thankyou
    //3-b Redirigir al usuario a /thankyou/:orderid (persistencia)
  }

  return (
    <div className="cart-container">
            <div className="cart-itemsList">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imgurl} alt={item.title} />
          <h2>{item.title}</h2>
          <h4>${item.price}</h4>
          <h4>unidades: {item.count}</h4>
          <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="orange">
          Vaciar Carrito
          </MyButton>
        </div>
      ))}
      </div>
      <CartForm onSubmit={handleCheckout} />
    </div>
  );
}

/*      <MyButton colorBtn="green" onTouchButton={handleCheckout}>
Finalizar Compra
</MyButton>*/

//      <button onClick={handleExport}>Borrenme pls</button>--->se uso dentro del div de arriba para exportar catálogo//

export default CartView;