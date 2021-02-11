import reducer, { initialState } from "../Reducers/reducers";
import {
  ADD_TO_CART,
  CART_LOADING_TOGGLE,
  CHANGE_QUANTITY,
  DELETE_FROM_CART,
  SET_CART,
} from "../Actions/actions";

describe("Cart reducer", () => {
  test("Testing CHANGE_QUANTITY +1", () => {
    expect(
      reducer(
        {
          ...initialState,
          cartItems: [
            {
              id: 1,
              name: "Tomatoes",
              price: 30,
              quantity: 8,
              pic:
                "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
            },
          ],
        },
        { type: CHANGE_QUANTITY, payload: { change: 1, id: 1 } }
      )
    ).toEqual({
      ...initialState,
      cartItems: [
        {
          id: 1,
          name: "Tomatoes",
          price: 30,
          quantity: 9,
          pic:
            "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
        },
      ],
    });
  });
  test("Testing CHANGE_QUANTITY -1", () => {
    expect(
      reducer(
        {
          ...initialState,
          cartItems: [
            {
              id: 1,
              name: "Tomatoes",
              price: 30,
              quantity: 8,
              pic:
                "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
            },
          ],
        },
        { type: CHANGE_QUANTITY, payload: { change: -1, id: 1 } }
      )
    ).toEqual({
      ...initialState,
      cartItems: [
        {
          id: 1,
          name: "Tomatoes",
          price: 30,
          quantity: 7,
          pic:
            "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
        },
      ],
    });
  });
  test("Testing SET_CART", () => {
    expect(
      reducer(initialState, {
        type: SET_CART,
        payload: [
          {
            id: 1,
            name: "Tomatoes",
            price: 30,
            quantity: 7,
            pic:
              "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
          },
        ],
      })
    ).toEqual({
      ...initialState,
      cartItems: [
        {
          id: 1,
          name: "Tomatoes",
          price: 30,
          quantity: 7,
          pic:
            "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
        },
      ],
    });
  });
  test("Testing CART_LOADING_TOGGLE", () => {
    expect(
      reducer(
        { ...initialState, cartLoading: false },
        { type: CART_LOADING_TOGGLE, payload: true }
      )
    ).toEqual({ ...initialState, cartLoading: true });
  });
  test("Testing ADD_TO_CART", () => {
    expect(
      reducer(initialState, {
        type: ADD_TO_CART,
        payload: {
          id: 1,
          name: "Tomatoes",
          price: 30,
          quantity: 7,
          pic:
            "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
        },
      })
    ).toEqual({
      ...initialState,
      cartItems: [
        {
          id: expect.any(Number),
          name: "Tomatoes",
          price: 30,
          quantity: 7,
          pic:
            "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
        },
      ],
    });
  });
  test("Testing DELETE_FROM_CART", () => {
    expect(
      reducer(
        {
          ...initialState,
          cartItems: [
            {
              id: 1,
              name: "Tomatoes",
              price: 30,
              quantity: 7,
              pic:
                "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
            },
          ],
        },
        { type: DELETE_FROM_CART, payload: { id: 1 } }
      )
    ).toEqual({ ...initialState, cartItems: [] });
  });
});
