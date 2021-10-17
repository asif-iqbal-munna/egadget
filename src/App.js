import React, { createContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import useProducts from "./hooks/useProducts";

export const orderContext = createContext();
function App() {
  const [products] = useProducts();
  const [orders, setOrders] = useState([]);

  const handleAddToCart = (id) => {
    const addedProduct = products.find((product) => product.id === id);
    const totalProducts = [...orders, addedProduct];
    setOrders(totalProducts);
  };

  return (
    <orderContext.Provider value={orders}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home addToCart={handleAddToCart} />
          </Route>
          <Route exact path="/home">
            <Home addToCart={handleAddToCart} />
          </Route>
        </Switch>
      </Router>
    </orderContext.Provider>
  );
}

export default App;
