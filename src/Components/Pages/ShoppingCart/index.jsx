import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import Checkout from "./Checkout";
import { fetchCart } from "../../../Store/Actions/actions";
import "./style.css";

const ShoppingCart = ({ items, loading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div className={"shoppingCart"}>
      <div className={"header"}>SHOPPING CART</div>
      <div className={"midSection"}>
        {items.length > 0 && !loading && <ItemList items={items} />}
        {!loading && items.length === 0 && <div>No items in cart</div>}
        {loading && <div>Loading ...</div>}
        <Checkout />
      </div>
      <NewItemForm />
    </div>
  );
};

export default connect((store) => ({
  items: store.cartItems,
  loading: store.cartLoading,
}))(ShoppingCart);
