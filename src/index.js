import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import ErrorDialog from "./components/ErrorDialog";
import LoadingSpinner from "./components/LoadingSpinner";
import { BrowserRouter } from "react-router-dom";

const GlobalLoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  global.setIsLoading = setIsLoading;
  return isLoading ? (
    <div
      style={{ position: "fixed", top: "300px", left: "40%", color: "black" }}
    >
      <LoadingSpinner />
    </div>
  ) : null;
};

const GlobalErrorDialogBox = () => {
  const [errorState, setErrorState] = useState(false);
  const [errors, setErrors] = useState();

  const showAlert = (argErrors) => {
    console.log(argErrors);
    setErrorState(true);
    setErrors(argErrors);
  };

  global.showAlert = showAlert;

  return (
    <Fragment>
      <ErrorDialog
        errors={errors}
        errorState={errorState}
        setErrorState={setErrorState}
      />
    </Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalLoadingSpinner />
        <GlobalErrorDialogBox />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
