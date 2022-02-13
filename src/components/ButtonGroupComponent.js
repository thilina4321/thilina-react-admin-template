import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/useHttp";

const ButtonUpdateGroupComponent = (props) => {
  const { action, backRoute, id, data, updateUrl, deleteUrl } = props;
  const dispatch = useDispatch();
  const history = useNavigate();

  const updateRequest = useHttp({
    url: `${updateUrl}/${id}`,
    method: "put",
    body: data,
  });

  const deleteRequest = useHttp({
    url: `${deleteUrl}/${id}`,
    method: "delete",
    body: null,
  });

  const updateHandler = async () => {
    await updateRequest();
    dispatch(action.updateValue({ id, ...data }));
    history.replace(backRoute);
  };

  const deleteHandler = async () => {
    await deleteRequest();
    dispatch(action.deleteValue(id));
    history.replace(backRoute);
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
        onClick={deleteHandler}
        style={{ backgroundColor: "red", cursor: "pointer" }}
      >
        Delete
      </button>
      <button
        onClick={updateHandler}
        style={{ backgroundColor: "green", cursor: "pointer" }}
      >
        Update
      </button>
    </div>
  );
};

export default ButtonUpdateGroupComponent;
