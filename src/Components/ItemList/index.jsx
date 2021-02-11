import Item from "Components/Item";

import styles from  "./style.module.css";

const ItemList = ({ items }) => (
    <div className={styles.itemList}>
      {items.map((item) => (
        <Item key={item.id} element={item} />
      ))}
    </div>
);


export default ItemList;
