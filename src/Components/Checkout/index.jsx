import {useSelector} from "react-redux";

import styles from "./style.module.css";
import {getTotalPrice} from 'Store/Selectors/selectors';

const Checkout = () => {
  const total = useSelector(getTotalPrice)

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutTotal}>Total:</div>
      <div className={styles.number}>${total.toFixed(2)}</div>
      <button className={styles.checkoutButton}>CHECKOUT</button>
    </div>
  )
};

export default Checkout;
