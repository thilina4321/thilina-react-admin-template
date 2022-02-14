import React from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload";

const First = () => {
  const na = useNavigate();

  return (
    <div>
      This is the home page
      <ImageUpload />
    </div>
  );
};

export default First;
