import React from "react";
import classes from "../styles/Video.module.css";

function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img src={`https://gdurl.com/${id}/`} alt={title} />

      {/* <img src={`https://gifyu.com/image/${id}`} alt={title} /> */}
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>
          <span className={classes.pscore}>Total Score : {noq * 5}</span>
        </p>
      </div>
    </div>
  );
}

export default Video;
