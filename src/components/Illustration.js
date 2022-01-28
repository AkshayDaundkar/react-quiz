import React from "react";
import classes from "../styles/Illustration.module.css";

function Illustration(props) {
  return (
    <div className={classes.illustration}>
      <img src={props.icon} alt="Signup" />
    </div>
  );
}

export default Illustration;
