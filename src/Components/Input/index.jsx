import "Components/Input/style.css";

const Input = ({
  label = "",
  type = "string",
  disabled = false,
  register,
  required = false,
}) => {
  return (
    <input
      className={"input"}
      placeholder={label}
      name={label}
      type={type}
      disabled={disabled}
      ref={register({ required })}
    />
  );
};

export default Input;
