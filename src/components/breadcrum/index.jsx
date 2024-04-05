import React from "react";
import breadcrum_arrow from "../../assets/breadcrum_arrow.png";
import styles from "./breadcrum.module.css";
import ProductDisplay from "../productDisplay";

const Breadcrum = (props) => {
  const { product } = props;
  // console.log(props.product);
  return (
    <div className={styles["breadcrum"]}>
      HOME <img src={breadcrum_arrow} alt="breadcrum_arrow" /> SHOP{" "}
      <img src={breadcrum_arrow} alt="breadcrum_arrow" /> {product.category}{" "}
      <img src={breadcrum_arrow} alt="breadcrum_arrow" /> {product.name}
    </div>
  );
};

export default Breadcrum;
