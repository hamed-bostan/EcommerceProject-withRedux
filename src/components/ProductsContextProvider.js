import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "./getApi";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getProducts());
    };
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
