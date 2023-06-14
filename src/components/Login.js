import React, { useEffect, useState } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import styles from "../styles/SignUp.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({});

  useEffect(() => {
    setErrors(validate(info, "login"));
  }, [info]);

  const handler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const focushandler = (e) => {
    setFocus({ ...focus, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      console.log("there is no error");
      notify("you are logged in", "success");
    } else {
      notify("invalid information", "error");
      setFocus({
        email: true,
        password: true,
      });
    }
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <h2 className={styles.header}>login</h2>

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

          <div className={styles.buttonContainer}>
            <Link to="/signup" className={styles.linkButton}>
              signup
            </Link>
            <button type="submit" className={styles.button}>
              login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
