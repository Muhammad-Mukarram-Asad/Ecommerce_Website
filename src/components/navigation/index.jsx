import React, { useState, useContext } from "react";
import styles from "./navigation.module.css";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../contextAPI/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("");
  const {getTotalCartItem} = useContext(ShopContext)
  return (
    <div className={styles["navbar"]}>
      <div className={styles["nav_logo"]}>
        <img src={logo} alt="logo_icon" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles["nav_menu"]}>
        <li onClick={() => setMenu("shop")}>
          <NavLink style={{ textDecoration: "none" }} to="/">
            Shop { menu === "shop" ? <hr /> : ""}
          </NavLink>
        </li>
        <li onClick={() => setMenu("men")}>
          <NavLink style={{ textDecoration: "none" }} to="/men">
            Men {menu === "men" ? <hr /> : ""}
          </NavLink>
        </li>
        <li onClick={() => setMenu("women")}>
          <NavLink style={{ textDecoration: "none" }} to="/women">
            Women {menu === "women" ? <hr /> : ""}
          </NavLink>
        </li>
        <li onClick={() => setMenu("kids")}>
          <NavLink style={{ textDecoration: "none" }} to="/kids">
            Kids {menu === "kids" ? <hr /> : ""}
          </NavLink>
        </li>
      </ul>
      <div className={styles["nav_btn_cart"]}>
        <NavLink style={{ textDecoration: "none" }} to="/login">
          <button>LOGIN</button>
        </NavLink>
        <NavLink to="/addToCart">
          <img src={cartIcon} alt="cart_icon" />{" "}
        </NavLink>
        <div className={styles["nav_cart_count"]}>
          {getTotalCartItem()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
