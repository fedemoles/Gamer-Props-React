import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
//import NavLinks from "./components/NavLinks/NavLinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/Context/cartContext";
import CartView from "./components/CartView/CartView";
import ThankYou from "./components/ThankYou/ThankYou";
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        {/*<ItemListContainer greeting="Compras HARD para tu mundo GAMER" />*/}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:idCategory" element={<ItemListContainer />} />

          <Route path="/detail/:idItem" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartView />} />

          <Route path="/thankyou/:idOrder" element={<ThankYou />} />

          <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;