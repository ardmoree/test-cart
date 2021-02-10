import React from "react"
import "./style.css"
import Input from "../../../UI/Input";
import { useForm } from "react-hook-form";

const NewItemForm = ({}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleChange = (data) => {
    console.log(data.target.value)
  }

  return (
    <form className={"newItemForm"} onSubmit={handleSubmit(onSubmit)}>
      <div className={"field"}>
        <Input label={"Name"} register={register} required/>
      </div>
      <div className={"field"}>
        <Input label={"Quantity"} register={register} required/>
      </div>
      <div className={"field"}>
        <Input label={"Price"} register={register} required/>
      </div>
      <button >Add new product</button>
    </form>
  )
}

export default NewItemForm;
