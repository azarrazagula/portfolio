import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`px-6 py-3 font-bold bg-[#F55800] border text-white  ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
