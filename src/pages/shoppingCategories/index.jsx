import React, { useContext } from "react";
import styles from "./shopCategory.module.css";
import { ShopContext } from "../../components/contextAPI/ShopContext";
import dropdown_icon from "../../assets/dropdown_icon.png";
import Item from "../../components/items";
import Navbar from "../../components/navigation";

const ShoppingCategories = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className={styles["shop_category"]}>
      <Navbar />
      <img className={styles["banner_img"]} src={props.banner} alt="banner" />
      <div className={styles["index_sorting"]}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className={styles["category_sort"]}>
          sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>

      <div className={styles["shopCategory_products"]}>
        {all_products.map((element, index) => {
          if (props.category === element.category) {
            return (
              <Item
                key={index}
                id={element.id}
                image={element.image}
                name={element.name}
                new_price={element.new_price}
                old_price={element.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className={styles["loadMore_div"]}>Explore More</div>
    </div>
  );
};

export default ShoppingCategories;
