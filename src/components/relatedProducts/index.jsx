import React from "react";
import styles from "./relatedProducts.module.css";
import { women_data_list, men_data_list, kids_data_list } from "../../assets/data";

import Item from "../items";

const RelatedProducts = (props) => {
  const { category } = props;
  return (
    <div className={styles["related_products"]}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles["related_products_item"]}>
        {category === "women"
          ? women_data_list.map((element, index) => {
              return (
                <Item
                  id={element.id}
                  key={index}
                  image={element.image}
                  name={element.name}
                  new_price={element.new_price}
                  old_price={element.old_price}
                />
              );
            })
          : category === "men"
          ? men_data_list.map((element, index) => {
              return (
                <Item
                  id={element.id}
                  key={index}
                  image={element.image}
                  name={element.name}
                  new_price={element.new_price}
                  old_price={element.old_price}
                />
              );
            })
          : kids_data_list.map((element, index) => {
              return (
                <Item
                  id={element.id}
                  key={index}
                  image={element.image}
                  name={element.name}
                  new_price={element.new_price}
                  old_price={element.old_price}
                />
              );
            })}
      </div>
    </div>
  );
};

export default RelatedProducts;
