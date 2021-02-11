import { connect } from "react-redux";

import styles from "style.module.css";

const Checkout = ({ total }) => {
  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutTotal}>Total:</div>
      <div className={styles.number}>${total}</div>
      <button className={styles.checkoutButton}>CHECKOUT</button>
    </div>
  );
};

export default connect((store) => ({
  total: store.total,
}))(Checkout);
