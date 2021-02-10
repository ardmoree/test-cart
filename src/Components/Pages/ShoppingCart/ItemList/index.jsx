import "./style.css"
import Item from "./Item";

const ItemList = ({items}) => {
  return (<div className={"itemList"}>
    {items.map((item) => (<Item key={item.id} element={item}/>))}
  </div>)
}

export default ItemList;
