import React from "react";
import classes from "./layout.module.css";

const Mainbar = ({ setIsSide, isSide, lightTheme, setLightTheme }) => {
  return (
    <div className={classes.mainbar}>
      <button className={classes.btn} onClick={() => setIsSide(!isSide)}>
        Click
      </button>
      <p className={classes.p}> Main Brand </p>
      <p onClick={() => setLightTheme(!lightTheme)}>
        {!lightTheme ? "Light" : "Dark"}
      </p>
      <p> Logout </p>
    </div>
  );
};

export default Mainbar;
