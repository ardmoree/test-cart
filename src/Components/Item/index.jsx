import {useDispatch} from "react-redux";

import { changeQuantity, deleteFromCart } from "Store/Actions/actions";

import styles from "./style.module.css";

const Item = ({ element }) => {
  const dispatch = useDispatch()

  const hasImage = !!element.pic

  const handleDecrement = () => {
      dispatch(
        changeQuantity({ id: element.id, change: -1 })
      );
  };
  const handleIncrement = () => {
    dispatch(
      changeQuantity({ id: element.id, change: 1 })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteFromCart({
        id: element.id
      })
    );
  };

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        {hasImage
          ? <img src={element.pic} alt={""} />
          : <div className={styles.noPic}>Image will be added shortly</div>}
      </div>
      <div className={styles.itemName}>{element.name}</div>
      <div className={styles.rightSide}>
        <div className={styles.controls}>
          <button
            className={styles.button}
            onClick={handleDecrement}
            disabled={element.quantity <= 1}
          >
            -
          </button>
          <div className={styles.counter}>{element.quantity}</div>
          <button className={styles.button} onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className={styles.total}>
          ${(element.quantity * element.price).toFixed(2)}
        </div>
        <button className={styles.remove} onClick={handleDelete}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Item;
