import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const CloseButton = () => {
  let history = useHistory();
  return (
    <button
      className="mb-6 text-3xl font-bold focus:outline-none hover:text-red-500"
      onClick={() => {
        history.goBack();
      }}
    >
      <AiFillCloseCircle />
    </button>
  );
};

export default CloseButton;
