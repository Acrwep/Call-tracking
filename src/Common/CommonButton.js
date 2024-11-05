import React from "react";
import { Button } from "antd";
import "./commonstyles.css";

const CommonButton = ({ name, type, onClick, disabled, width }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{ width: width }}
      className="commonbutton"
    >
      {name}
    </Button>
  );
};
export default CommonButton;
