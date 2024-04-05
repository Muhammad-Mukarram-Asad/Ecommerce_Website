import React from "react";
import styles from "./loginSignup.module.css"
import Navbar from "../../components/navigation";

const AuthenticatingUser = () => {
  return (
    <main className={styles["login_signup"]}>
      <Navbar />
      <div className={styles["login_signup_container"]}>
        <h1>Sign Up</h1>
        <div className={styles["login_signup_fields"]}>
          <input type="text" placeholder="Enter your name" name="" id="" />
          <input type="email" placeholder="Enter your email" name="" id="" />
          <input
            type="password"
            placeholder="Writre your password"
            name=""
            id=""
          />
        </div>
        <button type="button">Continue</button>
        <p className={styles["login_p"]}>
          Already have an account? <span>Login</span>
        </p>
        <div className={styles["checkbox_div"]}>
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </main>
  );
};

export default AuthenticatingUser;
