import React from "react";
import { shorten } from "./functions";
import styles from "../styles/Cart.module.css";
import trashIcon from "../assests/trash.svg";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "./redux/cart/cartAction";

const Cart = ({ data }) => {
  const { image, price, title, quantity } = data;
  const dispatch = useDispatch();

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
            onClick={() => dispatch(decrease(data))}
            className={styles.button}
          >
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeItem(data))}
            className={styles.button}
          >
            <img src={trashIcon} alt="trash icon" />
          </button>
        )}
        <button
          onClick={() => dispatch(increase(data))}
          className={styles.button}
        >
          +
        </button>
      </div>
    </article>
  );
};

export default Cart;
