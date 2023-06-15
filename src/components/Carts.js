import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import styles from "../styles/Carts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clear, checkout } from "./redux/cart/cartAction";

const Carts = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.cartContainer}>
        {/* payment section */}
        <article className={styles.paymentContainer}>
          <div className={styles.subPaymentContainer}>
            {state.itemsCounter > 0 && (
              <div>
                <p className={styles.totalText}>
                  <span>total items: </span>
                  {state.itemsCounter}
                </p>
                <p className={styles.totalText}>
                  <span>total payment: </span>
                  {state.totalPrice} $
                </p>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.clearButton}
                    onClick={() => {
                      dispatch(clear());
                    }}
                  >
                    clear
                  </button>
                  <button
                    className={styles.checkoutButton}
                    onClick={() => {
                      dispatch(checkout());
                    }}
                  >
                    check out
                  </button>
                </div>
              </div>
            )}
          </div>
        </article>
        {/* end of payment section */}

        {/* cart section */}
        <section className={styles.cards}>
          {state.selectedItems.map((item) => {
            return <Cart key={item.id} data={item} />;
          })}
        </section>
      </div>
      {/* end of cart section */}

      {/* check out section */}
      {state.checkout && (
        <div className={styles.checkout}>
          <p>checked out succesfully</p>
          <Link to="/" className={styles.needAnythingButton}>
            need anything?
          </Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.checkout}>
          <p>your cart is clear</p>
          <Link to="/" className={styles.needAnythingButton}>
            need anything?
          </Link>
        </div>
      )}
      {/* end of check out section */}
    </div>
  );
};

export default Carts;
