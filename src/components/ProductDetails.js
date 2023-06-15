import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/ProductDetails.module.css";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  let { productId } = useParams();
  const products = useSelector((state) => state.productsState.products);

  const singleProduct = products.find(
    (product) => parseInt(product.id) === parseInt(productId)
  );

  const { image, category, title, description, price } = singleProduct;

  return (
    <div className={styles.productDetailsContainer}>
      <article className={styles.imageContainer}>
        <img src={image} alt="name" className={styles.image} />
      </article>
      <article className={styles.subContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>category: </span>
          {category}
        </p>
        <div className={styles.links}>
          <p className={styles.price}>{price} $</p>
          <Link to="/" className={styles.link}>
            back to shop
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ProductDetails;
