import React from "react";
import classes from "../styles/Question.module.css";
import Answers from "./Answers";

function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span
          className="material-icons-outlined"
          style={{ color: "rgb(97, 218, 251)" }}
        >
          {" "}
          help_outline{" "}
        </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}

export default Question;
