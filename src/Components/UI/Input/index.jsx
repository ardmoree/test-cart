import React from "react"
import "./style.css"

const Input = ({
                 label = "",
                 type = "string",
                 value = "",
                 disabled = false,
                 onChange,
                 register,
                 required = false
               }) => {
  return (
    <div className={"input"}>
      <label>{label}</label>
      <input
        name={label}
        type={type}
        // value={value}
        // onChange={onChange}
        disabled={disabled}
        ref={register({required})}
      />
    </div>
  )
}

export default Input
