import React from "react";

import classes from "./Input.module.css";

// I use React.forwardRef because in MealForm.js i want to use ref but ref is not work in custom component so we use React.forward to solve this problem
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
    </div>
  );
});

export default Input;
