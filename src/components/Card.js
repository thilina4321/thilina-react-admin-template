import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const CardComponent = (props) => {
  const { question, answer } = props;

  return (
    <Card style={{ height: "8rem", overflow:'hidden' }}>
      <CardContent>
        <CardHeader>{question}</CardHeader>
        <CardHeader>{answer}</CardHeader>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
