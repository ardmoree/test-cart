import "./style.css"

const Item = ({element}) => {
  return <div className={"item"}>
    <div className={"imgContainer"}><img src={element.pic} alt={""}/></div>
    <div className={"itemName"}>{element.name}</div>
    <div className={"rightSide"}>
      <div className={"controls"}>
        <button className={"button"}>-</button>
        <div className={"counter"}>0</div>
        <button className={"button"}>+</button>
      </div>
      <div className={"total"}>Total: $123</div>
      <button className={"remove"}>Remove</button>
    </div>
  </div>
}

export default Item
