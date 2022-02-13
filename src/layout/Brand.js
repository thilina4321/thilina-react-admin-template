import React from "react";
import classes from "./layout_light.module.css";
import darkclasses from "./layout_dark.module.css";
import Switch from "@mui/material/Switch";

const Mainbar = ({ setIsSide, isSide, lightTheme, setLightTheme }) => {
  return (
    <div className={lightTheme ? classes.mainbar : darkclasses.dark_mainbar}>
      <button className={classes.btn} onClick={() => setIsSide(!isSide)}>
        Click
      </button>
      <p className={classes.p}> Main Brand </p>

      <Switch checked={lightTheme} onClick={() => setLightTheme(!lightTheme)} />
      <p style={{marginRight:'1rem'}}> Logout </p>
    </div>
  );
};

export default Mainbar;
