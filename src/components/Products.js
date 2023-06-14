import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Products.module.css";

// Components
import Product from "./Product";

// redux
import { fetchProducts } from "./redux/products/productsAction";

// Style

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.products_container}>
      {productsState.loading ? (
        <h2>Loading</h2>
      ) : productsState.error ? (
        <p>Somethin went wrong</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} products={product} />
        ))
      )}
    </div>
  );
};

export default Store;
