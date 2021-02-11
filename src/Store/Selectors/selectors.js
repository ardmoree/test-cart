import {createSelector} from "reselect";

export const getCartItems = (store) => store.cartItems;

export const getLoading = (store) => store.cartLoading

export const getTotalPrice = createSelector(getCartItems, items => items.reduce((price, item)=> price + (item.price * item.quantity), 0))
