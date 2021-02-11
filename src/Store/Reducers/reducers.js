import {
  SET_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_QUANTITY,
  CART_LOADING_TOGGLE,
} from "../Actions/actions";

export const initialState = {
  cartItems: [],
  cartLoading: false,
  total: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cartItems: action.payload,
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
        cartItems: [newItem, ...state.cartItems],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.id !== action.payload.id),
      };
    case CHANGE_QUANTITY:
      return {
        ...state,
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
