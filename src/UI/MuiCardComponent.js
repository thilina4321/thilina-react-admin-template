import React from "react";
import Card from "@mui/material/Card";

const MuiCardComponent = (props) => {
  return (
    <Card style={{ padding: "2rem", marginTop: "3rem" }}>
      <h1> {props.title} </h1>
      {props.children}
    </Card>
  );
};

export default MuiCardComponent;
