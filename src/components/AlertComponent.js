import React from "react";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";

const AlertComponent = () => {
  return (
    <Card className="mb-4">
      <Alert
        color="warning"
        dismissible
        onClose={() => {
          alert("👋 Well, hi there! Thanks for dismissing me.");
        }}
      >
        <strong>Go right ahead</strong> and click that dimiss over there on the
        right.
      </Alert>
    </Card>
  );
};

export default AlertComponent;
