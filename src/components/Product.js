import React, { useContext } from "react";
import { quantityCount, shorten, isInCart } from "./functions";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import styles from "../styles/Product.module.css";
import trashIcon from "../assests/trash.svg";

const Product = ({ products }) => {
  const { id, title, price, image } = products;
  // const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.product}>
      <img src={image} alt={shorten(title)} className={styles.image} />
      <h3 className={styles.title}>{shorten(title)}</h3>
      <p className={styles.price}>{price}$</p>
      <div className={styles.button_container}>
        <Link to={`/products/${id}`} className={styles.link}>
          details
        </Link>
        <div>
          {/* {quantityCount(state, id) === 1 && (
            <button
              className={styles.button}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: products })
              }
            >
              <img src={trashIcon} alt="trashIcon" />
            </button>
          )}

          {quantityCount(state, id) > 1 && (
            <button
              className={styles.button}
              onClick={() => dispatch({ type: "DECREASE", payload: products })}
            >
              -
            </button>
          )}

          {quantityCount(state, id) > 0 && (
            <span className={styles.counter}>{quantityCount(state, id)}</span>
          )} */}

          {/* check if the item is in the cart */}
          {/* {isInCart(state, id) ? (
            <button
              className={styles.button}
              onClick={() => dispatch({ type: "INCREASE", payload: products })}
            >
              +
            </button>
          ) : (
            <button
              className={styles.add_to_cart}
              onClick={() => dispatch({ type: "ADD_ITEM", payload: products })}
            >
              add to cart
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Product;
