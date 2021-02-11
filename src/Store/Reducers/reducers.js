import {
  SET_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_QUANTITY,
  CART_LOADING_TOGGLE,
} from "../Actions/actions";

const initialState = {
  cartItems: [],
  cartLoading: false,
  total: 0,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      let fullPrice = 0;
      action.payload.forEach((el) => {
        fullPrice += el.quantity * el.price;
      });
      return {
        ...state,
        cartItems: action.payload,
        total: fullPrice.toFixed(2),
      };
    case CART_LOADING_TOGGLE:
      return { ...state, cartLoading: action.payload };
    case ADD_TO_CART:
      const newItem = {
        ...action.payload,
        id: Math.random(),
      };
      return {
        ...state,
        total: (
          Number(state.total) +
          action.payload.price * action.payload.quantity
        ).toFixed(2),
        cartItems: [newItem, ...state.cartItems],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        total: (
          Number(state.total) -
          action.payload.price * action.payload.quantity
        ).toFixed(2),
        cartItems: state.cartItems.filter((el) => el.id !== action.payload.id),
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
        total: (
          Number(state.total) +
          action.payload.change * Number(action.payload.price)
        ).toFixed(2),
        cartItems: state.cartItems.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: Number(el.quantity) + action.payload.change }
            : el
        ),
      };
    default:
      return state;
  }
}
