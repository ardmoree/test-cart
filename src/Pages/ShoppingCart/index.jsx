import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import ItemList from "Components/ItemList";
import NewItemForm from "Components/NewItemForm";
import Checkout from "Components/Checkout";
import {fetchCart} from "Store/Actions/actions";
import {getCartItems, getLoading} from 'Store/Selectors/selectors';

import styles from "./style.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const items = useSelector(getCartItems)
  const loading = useSelector(getLoading)

  const isEmpty = items.length === 0

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.header}>SHOPPING CART</div>
      <div className={styles.midSection}>
        {loading
          ? <div className={styles.loading}>Loading ...</div>
          : isEmpty
            ? <div className={styles.emptyCart}>No items in cart</div>
            : <ItemList items={items}/>}
        <Checkout/>
      </div>
      <NewItemForm/>
    </div>
  );
};

export default ShoppingCart;
