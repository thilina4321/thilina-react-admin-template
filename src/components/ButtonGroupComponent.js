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
    body: undefined,
  });

  const updateHandler = async () => {
    const res = await updateRequest();
    if (res.error) {
      return;
    }
    const data = res.data["data"];
    dispatch(action.updateValue({ id, ...data }));
    history(backRoute);
  };

  const deleteHandler = async () => {
    const res = await deleteRequest();
    if (res.error) {
      return;
    }

    dispatch(action.deleteValue(id));
    history(backRoute);
  };

  const cancelHandler = () => {
    history(backRoute);
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
