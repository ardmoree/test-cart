import { connect } from "react-redux";

import { changeQuantity, deleteFromCart } from "Store/Actions/actions";

import styles from "style.module.css";

const Item = ({ element, item, dispatch }) => {
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(
        changeQuantity({ id: element.id, change: -1, price: element.price })
      );
    }
  };
  const handleIncrement = () => {
    dispatch(
      changeQuantity({ id: element.id, change: 1, price: element.price })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteFromCart({
        id: element.id,
        quantity: item.quantity,
        price: element.price,
      })
    );
  };

  return (
    <div className={"item"}>
      <div className={"imgContainer"}>
        {element.pic && <img src={element.pic} alt={""} />}
        {!element.pic && (
          <div className={"noPic"}>Image will be added shortly</div>
        )}
      </div>
      <div className={"itemName"}>{element.name}</div>
      <div className={"rightSide"}>
        <div className={"controls"}>
          <button
            className={"button"}
            onClick={handleDecrement}
            disabled={item.quantity <= 0}
          >
            -
          </button>
          <div className={"counter"}>{item.quantity}</div>
          <button className={"button"} onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className={"total"}>
          ${(item.quantity * element.price).toFixed(2)}
        </div>
        <button className={"remove"} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default connect((store, props) => ({
  item: store.cartItems.find((el) => el.id === props.element.id),
}))(Item);
