import React from 'react'
import Exclusive_Image from "../../assets/exclusive_image.png";
import styles from "./offer.module.css"

const Offers = () => {
  return (
    <main className={styles["offers_main_div"]}>
        <div className={styles["offer_left_div"]}>
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className={styles["offer_right_div"]}>
            <img src={Exclusive_Image} alt="exclusive" />
        </div>
    </main>
  )
}

export default Offers