import React, { useContext } from "react";
import styles from "./productDisplay.module.css";
import star_img from "../../assets/star_icon.png";
import starDull_img from "../../assets/star_dull_icon.png";
import { ShopContext } from "../contextAPI/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <main className={styles["product_display"]}>
      <section className={styles["product_display_left"]}>
        <div className={styles["product_display_img_list"]}>
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
          <img src={product.image} alt="product_image" />
        </div>
        <div className={styles["product_display_img"]}>
          <img
            src={product.image}
            className="product_display_main_img"
            alt="main_image"
          />
        </div>
      </section>

      <section className={styles["product_display_right"]}>
        <h1>{product.name}</h1>
        <div className={styles["product_display_right_star"]}>
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={star_img} alt="" />
          <img src={starDull_img} alt="" />
          <p>{ Math.floor(Math.random() * (150 - 100 + 1) ) + 100}</p>
        </div>
        <div className={styles["product_display_right_prices"]}>
          <div className={styles["product_display_price_old"]}>
            ${product.old_price}
          </div>
          <div className={styles["product_display_price_new"]}>
            ${product.new_price}
          </div>
        </div>
        <div className={styles["product_display_right_description"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          fugit quis repellendus iste iusto ullam quos blanditiis ut pariatur
          illum.
        </div>
        <div className={styles["product_display_right_size"]}>
          <h1>Select Size</h1>
          <div className={styles["product_display_right_sizes"]}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className={styles["product_display_right_category"]}>
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className={styles["product_display_right_category"]}>
          <span>Tags: </span>Modern, Latest
        </p>
      </section>
    </main>
  );
};

export default ProductDisplay;
