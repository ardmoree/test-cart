import React, { useEffect } from "react";
import "./style.css";
import { connect } from "react-redux";

const Checkout = ({ element, total }) => {
  return (
    <div className={"checkout"}>
      <div className={"checkoutTotal"}>Total: ${total}</div>
      <button className={"checkoutButton"}>CHECKOUT</button>
    </div>
  );
};

export default connect((store) => ({
  total: store.total,
}))(Checkout);
