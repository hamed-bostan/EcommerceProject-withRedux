import React, { useContext } from "react";
import { ProductsContext } from "./ProductsContextProvider";
import Product from "./Product";
import styles from "../styles/Products.module.css";

const Products = () => {
  const products = useContext(ProductsContext);

  return (
    <section className={styles.products_container}>
      {products.map((product) => {
        return <Product key={product.id} products={product} />;
      })}
    </section>
  );
};

export default Products;
