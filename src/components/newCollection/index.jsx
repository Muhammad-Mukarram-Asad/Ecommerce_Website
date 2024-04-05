import React from 'react'
import newCollections from "../../assets/new_collections";
import Item from '../items';
import styles from "./newCollection.module.css";
const NewCollection = () => {
  return (
    <div className={styles['newCollections']}>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className={styles["newCollections_item"]}>
            {newCollections.map((item, index) => {
                return(
                    <Item id={item.id} key={index} image={item.image} name={item.name}
                    new_price={item.new_price} old_price={item.old_price} />
                )
            })}
        </div>

    </div>
  )
}

export default NewCollection