import React, { useContext } from "react";
import { shorten } from "./functions";
import { CartContext } from "./CartContextProvider";
import styles from "../styles/Cart.module.css";
import trashIcon from "../assests/trash.svg";

const Cart = ({ data }) => {
  const { image, price, title, quantity } = data;
  const { dispatch } = useContext(CartContext);

  return (
    <article className={styles.cartContainer}>
      <img src={image} alt={shorten(title)} className={styles.image} />
      <div className={styles.titlePriceContainer}>
        <h2 className={styles.title}>{shorten(title)}</h2>
        <p className={styles.price}>{price} $</p>
      </div>
      <p className={styles.quantity}>{quantity}</p>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: data })}
            className={styles.button}
          >
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
            className={styles.button}
          >
            <img src={trashIcon} alt="trash icon" />
          </button>
        )}
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: data })}
          className={styles.button}
        >
          +
        </button>
      </div>
    </article>
  );
};

export default Cart;
