import { useState } from "react";
import useProducts from "./useProducts";

const UseOrders = (id) => {
  const [orders, setOrders] = useState([]);
  const [products] = useProducts();
  const addedProduct = products.find((product) => product.id === id);
  const totalProducts = [...orders, addedProduct];
  setOrders(totalProducts);
  return [orders];
};

export default UseOrders;
