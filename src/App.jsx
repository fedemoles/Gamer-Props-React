import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
//import NavLinks from "./components/NavLinks/NavLinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/*<ItemListContainer greeting="Compras HARD para tu mundo GAMER" />*/}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/category/:idCategory" element={<ItemListContainer />} />

          <Route path="/detail/:idItem" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>Error 404: Está página no existe</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
