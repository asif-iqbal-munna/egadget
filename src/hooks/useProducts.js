import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);

  useEffect(() => {
    fetch("./products.json")
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .finally(setIsProductsLoaded(true));
  }, []);
  return [products, isProductsLoaded];
};

export default useProducts;
