import React from "react";
import "./style.css";
import Input from "../../../UI/Input";
import { useForm } from "react-hook-form";
import { addToCart } from "../../../../Store/Actions/actions";
import { connect } from "react-redux";

const NewItemForm = ({ dispatch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <form className={"newItemForm"} onSubmit={handleSubmit(onSubmit)}>
      <div className={"field"}>
        <Input label={"name"} register={register} required />
      </div>
      <div className={"field"}>
        <Input label={"quantity"} register={register} required />
      </div>
      <div className={"field"}>
        <Input label={"price"} register={register} required />
      </div>
      <button className={"submitButton"}>Add new product</button>
    </form>
  );
};

export default connect()(NewItemForm);
