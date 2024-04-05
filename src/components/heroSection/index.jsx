import React from "react";
import styles from "./hero.module.css";
import hand_icon from "../../assets/hand_icon.png";
import hero_image from "../../assets/hero_image.png";
import arrow_icon from "../../assets/arrow.png";

const Hero = () => {
  return (
    <main className={styles["hero_main_div"]}>
      <section className={styles["hero_left_div"]}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className={styles["hero_left_inner_div"]}>
          <div className={styles["hand_icon_div"]}>
            <p>new</p>
            <img src={hand_icon} alt="hand_icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles["hero_latest_btn"]}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </section>

      <section className={styles["hero_right_div"]}>
        <img src={hero_image} alt="" />
      </section>
    </main>
  );
};

export default Hero;
