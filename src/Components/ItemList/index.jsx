import Item from "Components/Item";

import "Components/ItemList/style.css";

const ItemList = ({ items }) => {
  return (
    <div className={"itemList"}>
      {items.map((item) => (
        <Item key={item.id} element={item} />
      ))}
    </div>
  );
};

export default ItemList;
