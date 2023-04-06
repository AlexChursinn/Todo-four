import s from "./Button.module.css";

const Button = (props) => {
  const { onClick, children, title, disabled = false } = props;
  return (
    <button
      {...props} /* Передали type="submit" */
      className={s.button}
      /*       onClick={onClick}
      title={title} можно удалить так как они приходят одинаковые */
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
