import styles from "./style.module.css";

const Input = ({
  label = "",
  type = "string",
  disabled = false,
  register,
  required = false,
}) => (
    <input
      className={styles.input}
      placeholder={label}
      name={label}
      type={type}
      disabled={disabled}
      ref={register({ required })}
    />
  );
;

export default Input;
