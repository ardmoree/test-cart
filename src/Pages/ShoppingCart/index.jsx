import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import ItemList from "Components/ItemList";
import NewItemForm from "Components/NewItemForm";
import Checkout from "Components/Checkout";
import { fetchCart } from "Store/Actions/actions";

import "Pages/ShoppingCart/style.css";

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
        {!loading && items.length === 0 && (
          <div className={"emptyCart"}>No items in cart</div>
        )}
        {loading && <div className={"loading"}>Loading ...</div>}
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
