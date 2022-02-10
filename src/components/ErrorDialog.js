import React, { Fragment } from "react";

const ErrorDialog = (props) => {
  const { errors = [], errorState, setErrorState } = props;

  return <Fragment>{errorState && "error"}</Fragment>;
};

export default ErrorDialog;
