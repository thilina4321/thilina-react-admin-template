import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import useHttp from "../hooks/useHttp";
import classes from "./auth.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signRequest = useHttp({
    url: "/users/signup",
    method: "post",
    body: { email, password },
    onSucsses: () => {},
  });

  const signupHandler = async () => {
    const { data } = await signRequest();
    if (data) {
      const user = data["user"];
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  };

  return (
    <div className={classes.layout}>
      <div className={classes.auth}>
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
          ALREADY HAVE AN ACCOUNT
        </h1>

        <InputComponent name="Email" value={email} setValue={setEmail} />
        <InputComponent
          name="Password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <ButtonComponent name="Register" clickHandler={signupHandler} />
      </div>
    </div>
  );
};

export default Login;
