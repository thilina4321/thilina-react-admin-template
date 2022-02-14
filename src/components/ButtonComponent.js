import React from "react";
import "./button.module.css";

const ButtonComponent = (props) => {
  const { name, clickHandler } = props;
  return (
    <div style={{ width: "100%", marginTop: "1rem" }}>
      <button onClick={clickHandler}>{name}</button>
    </div>
  );
};

export default ButtonComponent;
