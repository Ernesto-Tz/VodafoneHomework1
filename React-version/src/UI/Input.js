import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <input {...props.input} />
    </div>
  );
};

export default Input;
