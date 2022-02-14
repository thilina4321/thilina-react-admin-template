import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate()
  return <div>Error404
      <button onClick={()=>navigate('/login')} > Go Home </button>
  </div>;
};

export default Error404;
