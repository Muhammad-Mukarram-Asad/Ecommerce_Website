import React from 'react'
import styles from "./news.module.css"
const NewsSubscription = () => {
  return (
    <main className={styles["newsLetter"]}>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className={styles["input_div"]}>
            <input type='email' placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </main>
  )
}

export default NewsSubscription