export const FETCH_CART = "FETCH_CART";
export const SET_CART = "SET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const CART_LOADING_TOGGLE = "CART_LOADING_TOGGLE";

export const fetchCart = () => ({
  type: FETCH_CART,
});

export const toggleCartLoading = (payload) => ({
  type: CART_LOADING_TOGGLE,
  payload,
});

export const setCart = (payload) => ({
  type: SET_CART,
  payload,
});

export const changeQuantity = (payload) => ({
  type: CHANGE_QUANTITY,
  payload,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const deleteFromCart = (payload) => ({
  type: DELETE_FROM_CART,
  payload,
});
