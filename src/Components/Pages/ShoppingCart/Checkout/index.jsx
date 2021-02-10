import React from "react"
import "./style.css"

const Checkout = ({element}) => {
  return <div className={"checkout"}>
    <div className={"checkoutTotal"}>Total: $228</div>
    <button className={"checkoutButton"}>CHECKOUT</button>
  </div>
}

export default Checkout
