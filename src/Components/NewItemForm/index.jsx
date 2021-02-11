import {useDispatch} from "react-redux";
import { useForm } from "react-hook-form";

import Input from "Components/Input";

import { addToCart } from "Store/Actions/actions";

import styles from "./style.module.css";

const NewItemForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(addToCart(data));
    reset();
  };

  return (
    <form className={styles.newItemForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <Input label={"name"} register={register} required />
      </div>
      <div className={styles.field}>
        <Input
          type={"number"}
          label={"quantity"}
          register={register}
          required
        />
      </div>
      <div className={styles.field}>
        <Input type={"number"} label={"price"} register={register} required />
      </div>
      <button className={styles.submitButton}>Add new product</button>
    </form>
  );
}

export default NewItemForm;
