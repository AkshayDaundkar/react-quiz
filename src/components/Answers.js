import React from "react";
import Checkbox from "../components/Checkbox";
import classes from "../styles/Answers.module.css";

function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answer" />
    </div>
  );
}

export default Answers;
