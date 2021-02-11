import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import Input from "Components/Input";

import { addToCart } from "Store/Actions/actions";

import "Components/NewItemForm/style.css";

const NewItemForm = ({ dispatch }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addToCart(data));
    reset();
  };

  return (
    <form className={"newItemForm"} onSubmit={handleSubmit(onSubmit)}>
      <div className={"field"}>
        <Input label={"name"} register={register} required />
      </div>
      <div className={"field"}>
        <Input
          type={"number"}
          label={"quantity"}
          register={register}
          required
        />
      </div>
      <div className={"field"}>
        <Input type={"number"} label={"price"} register={register} required />
      </div>
      <button className={"submitButton"}>Add new product</button>
    </form>
  );
};

export default connect()(NewItemForm);
