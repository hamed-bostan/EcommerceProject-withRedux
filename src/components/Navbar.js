import React, { useContext, useState } from "react";
import cart from "../assests/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";
import styles from "../styles/Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const [showLinks, setShowLinks] = useState(false);

  const toggleHandler = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.headerNavbarContainer}>
            {/* header section*/}
            <article className={styles.header}>
              <div className={styles.iconCartContainer}>
                <Link to="/cart">
                  <FaCartArrowDown className={styles.cart_icon} />
                </Link>
                <span className={styles.cartCounter}>{state.itemsCounter}</span>
              </div>
              <button
                onClick={toggleHandler}
                className={styles.navbarToggleButton}
              >
                <FaBars  />
              </button>
            </article>
            {/* end of header section*/}

            {/* navbar section */}
            <article
              className={
                showLinks ? styles.showNavbarLinks : styles.navbarLinks
              }
            >
              <Link to="/" className={styles.link}>
                home
              </Link>
              <Link to="/signup" className={styles.link}>
                signup
              </Link>
              <Link to="/login" className={styles.link}>
                login
              </Link>
            </article>
            {/* end of navbar section */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
