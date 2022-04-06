import React from "react";
import Button from "@mui/material/Button";

const MuiButtonComponent = (props) => {
  const { title, clickHandler } = props;

  return <Button style={{marginTop:'2rem'}} variant="outlined" onClick={clickHandler}>{title}</Button>;
};

export default MuiButtonComponent;
