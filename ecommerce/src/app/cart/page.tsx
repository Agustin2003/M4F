import CartComponent from '@/components/CartComponent';
import React from 'react'
import styles from "./cart.module.css"

const Cart = () => {
  const products: any = []

  return (
    <div>
    <div className={styles.container}>
    <div className={styles.headerContainer}>
    <div className={styles.headerBlock}>
    <span>PRODUCT</span>
    </div>
    <div className={styles.headerBlock}>
    <span>PRICE</span>
    </div>
    <div className={styles.headerBlock}>
    <span>REMOVE</span>
    </div>
    </div>
    <CartComponent/>
    </div>

    </div>
    );
}

export default Cart