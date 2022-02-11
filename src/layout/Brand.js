import React from "react";
import classes from "./layout_light.module.css";
import darkclasses from "./layout_dark.module.css";

const Mainbar = ({ setIsSide, isSide, lightTheme, setLightTheme }) => {
  return (
    <div className={lightTheme ? classes.mainbar : darkclasses.dark_mainbar}>
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
