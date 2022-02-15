import React from "react";

import Card from "@mui/material/Card";

const CardComponent = (props) => {
  const { title, subTitle } = props;

  return (
    <Card
      style={{
        height: "8rem",
        overflow: "hidden",
        textAlign: "center",
        padding: "0.4rem",
      }}
    >
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </Card>
  );
};

export default CardComponent;
