import React from 'react'
import styles from "./items.module.css"
import {NavLink} from "react-router-dom"

const Item = (props) => {
 //  console.log("props in Item --> ", props);
  return (
    <main className={styles["item_main_div"]}>
      <NavLink to={`/product/${props.id}`}>
        <img src={props.image} alt="item" onClick={window.scrollTo(0,0)} />
      </NavLink>
        <p>{props.name}</p>
        <section className={styles["item_price"]}>
            <div className={styles["item_price_new"]}>
                ${props.new_price}
            </div>
            <div className={styles["item_price_old"]}>
                ${props.old_price}
            </div>
        </section>

    </main>
  )
}

export default Item