import React, { useContext } from "react";
import styles from "./cartItems.module.css";
import { ShopContext } from "../contextAPI/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <main className={styles["cartItems"]}>
      <div className={styles["cartItems_format_main"]}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div
                className={`${styles["cartItems_format"]} ${styles["cartItems_format_main"]}`}
              >
                <img src={e.image} className={styles["prod_icon"]} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className={styles["cartItems_quantity"]}>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className={styles["remove_icon"]}
                  src={remove_icon}
                  alt="remove_icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className={styles["cartItems_down"]}>
        <div className={styles["cartItems_total"]}>
          <h1>Cart Totals</h1>

          <div className={styles["cartItems_total_item"]}>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className={styles["cartItems_total_item"]}>
            <p>Shipping fee</p>
            <p>Free</p>
          </div>

          <hr />

          <div className={styles["cartItems_total_item"]}>
            <h1>Total</h1>
            <h3>${getTotalCartAmount()}</h3>
          </div>

          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles["cartItems_promoCode"]}>
          <p>If you have a Promo Code, write down below:</p>
          <div className={styles["cartItems_promobox"]}>
            <input type="text" placeholder="Enter your promo code here" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartItems;
