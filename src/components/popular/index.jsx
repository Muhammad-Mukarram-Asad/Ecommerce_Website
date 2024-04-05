import React from 'react'
import {women_data_list} from "../../assets/data";
import Item from '../items';
import styles from "./popular.module.css"

const Popular = () => {
  return (
    <div className={styles['popular']}>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className={styles["popular_item"]}>
            {women_data_list.map((item, index) => {
                return(
                    <Item id={item.id} key={index} image={item.image} name={item.name}
                    new_price={item.new_price} old_price={item.old_price} />
                )
            })}
        </div>

    </div>
  )
}

export default Popular