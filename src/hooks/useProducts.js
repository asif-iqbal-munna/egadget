import { useEffect, useState } from "react";

const useProducts = () => {
  const [ products, setProducts ] = useState({});

  useEffect(() => {
    fetch("./products.json")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};

export default useProducts;
