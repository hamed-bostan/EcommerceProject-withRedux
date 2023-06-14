import React, { useEffect, useState } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import styles from "../styles/SignUp.module.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});

  useEffect(() => {
    setErrors(validate(info, "signup"));
  }, [info]);

  const handler = (e) => {
    if (e.target.name === "isAccepted") {
      setInfo({ ...info, [e.target.name]: e.target.checked });
    } else {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
  };

  const focushandler = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      console.log("there is no error");
      notify("you are signed up", "success");
    } else {
      notify("invalid information", "error");
      setFocus({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <h2 className={styles.header}>signup</h2>
          <div className={styles.inputContainer}>
            <label className={styles.labelText}>name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={info.name}
              onChange={handler}
              onFocus={focushandler}
            />
            {errors.name && focus.name && (
              <span className={styles.errorsText}>{errors.name}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.labelText}>email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={info.email}
              onChange={handler}
              onFocus={focushandler}
            />
            {errors.email && focus.email && (
              <span className={styles.errorsText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.labelText}>password</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={info.password}
              onChange={handler}
              onFocus={focushandler}
            />
            {errors.password && focus.password && (
              <span className={styles.errorsText}>{errors.password}</span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.labelText}>confirm password</label>
            <input
              className={styles.input}
              type="password"
              name="confirmPassword"
              value={info.confirmPassword}
              onChange={handler}
              onFocus={focushandler}
            />
            {errors.confirmPassword && focus.confirmPassword && (
              <span className={styles.errorsText}>
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <div className={styles.inputContainer}>
            <div className={styles.termsContainer}>
              <label className={styles.labelText}>
                i accept terms and regulations
              </label>
              <input
                type="checkbox"
                name="isAccepted"
                value={info.isAccepted}
                onChange={handler}
                onFocus={focushandler}
              />
            </div>
            {errors.isAccepted && focus.isAccepted && (
              <span className={styles.errorsText}>{errors.isAccepted}</span>
            )}
          </div>
          <div className={styles.buttonContainer}>
            <Link to="/login" className={styles.linkButton}>
              login
            </Link>
            <button type="submit" className={styles.button}>
              signup
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SingUp;
