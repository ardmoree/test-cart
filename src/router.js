import { Provider } from "react-redux";
import store from "./Store/store";
import ShoppingCart from "Pages/ShoppingCart";

export const Router = () => (
  <Provider store={store}>
    <ShoppingCart />
  </Provider>
)
