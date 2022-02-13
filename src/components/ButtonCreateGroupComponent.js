import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const ButtonCreateGroupComponent = (props) => {
  const { action, backRoute, data, url } = props;
  const dispatch = useDispatch();
  const history = useNavigate();

  const createRequest = useHttp({
    url,
    method: "post",
    body: data,
  });

  const createHandler = async () => {
    const response = await createRequest();
    if (response) {
      const data = response.data;
      dispatch(action.createValue(data));
      history.replace(backRoute);
    }
  };

  const cancelHandler = () => {
    history.replace(backRoute);
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "20px 5px",
        gap: "5px",
        justifyContent: "flex-end",
      }}
    >
      <button
        onClick={cancelHandler}
        style={{ backgroundColor: "grey", cursor: "pointer" }}
      >
        Cancel
      </button>

      <button
        onClick={createHandler}
        style={{ backgroundColor: "green", cursor: "pointer" }}
      >
        Create
      </button>
    </div>
  );
};

export default ButtonCreateGroupComponent;
