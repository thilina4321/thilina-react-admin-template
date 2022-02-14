import React, { useEffect, useState } from "react";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import useHttp from "../hooks/useHttp";
import classes from "./auth.module.css";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginRequest = useHttp({
    url: "/users/signin",
    method: "post",
    body: { email, password },
  });

  const [user] = useLocalStorage();

  useEffect(() => {
    if (user) {
      navigate("/dummy1");
      return;
    }
  }, [user]);

  const loginHandler = async () => {
    const { data } = await loginRequest();
    if (data) {
      const user = data["user"];
      const token = data["token"];
      console.log(data["user"]);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      window.location = "/dummy1";
      return;
    }
  };

  return (
    <div className={classes.layout}>
      <div className={classes.auth}>
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
          NEW TO BLOOD BANK
        </h1>

        <InputComponent name="Email" value={email} setValue={setEmail} />
        <InputComponent
          name="Password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <ButtonComponent name="Login" clickHandler={loginHandler} />
      </div>
    </div>
  );
};

export default Login;
