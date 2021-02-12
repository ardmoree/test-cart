import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import { render, fireEvent, screen } from "@testing-library/react";
import * as actions from "Store/Actions/actions";

import Item from "./index";

jest.mock("Store/Actions/actions");

const mockStore = createMockStore([]);
const mockedActions = actions;

const item = {
  id: 1,
  name: "Tomatoes",
  price: 30,
  quantity: 7,
  pic:
    "https://static06.vprok.ru/src/product.file/list/image/02/20/202002.jpeg",
};

describe("Item", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
    mockedActions.changeQuantity.mockReset();
    render(
      <Provider store={store}>
        <Item element={item} />
      </Provider>
    );
  });

  it("Renders name, quantity and price", () => {
    expect(screen.getByText(item.name)).toBeTruthy();
    expect(screen.getByText(item.quantity)).toBeTruthy();
    expect(
      screen.getByText(`$${(item.price * item.quantity).toFixed(2)}`)
    ).toBeTruthy();
  });

  it("should call action on decrement button click", () => {
    fireEvent.click(screen.getByText("-"));
    expect(mockedActions.changeQuantity).toHaveBeenCalledTimes(1);
    expect(mockedActions.changeQuantity).toHaveBeenCalledWith({
      change: -1,
      id: item.id,
    });
  });

  it("should call action on increment button click", () => {
    fireEvent.click(screen.getByText("+"));
    expect(mockedActions.changeQuantity).toHaveBeenCalledTimes(1);
    expect(mockedActions.changeQuantity).toHaveBeenCalledWith({
      change: 1,
      id: item.id,
    });
  });

  it("should call action on remove button click", () => {
    fireEvent.click(screen.getByText("Remove"));
    expect(mockedActions.deleteFromCart).toHaveBeenCalledTimes(1);
    expect(mockedActions.deleteFromCart).toHaveBeenCalledWith({ id: item.id });
  });
});
