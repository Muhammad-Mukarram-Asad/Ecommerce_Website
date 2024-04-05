import React from "react";
import styles from "./description.module.css"
const DescriptionBox = () => {
  return (
    <main className={styles["description_box"]}>
      <div className={styles["description_box_navigator"]}>
        <div className={styles["description_nav_box"]}>Description</div>
        <div className={styles["description_nav_box_fade"]}>Reviews (122)</div>
      </div>

      <div className={styles["description_box_description"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam
          neque dolorem. Corporis error vel sapiente quam modi? Ea dolore esse
          natus atque! Error, necessitatibus unde fugit vero dolorem natus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque
          veritatis quod praesentium labore quia?
        </p>
      </div>
    </main>
  );
};

export default DescriptionBox;
