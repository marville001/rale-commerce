import React from "react";

const IconedButton = ({ icon, text, bgColor, color, action }) => {
  return (
    <button
      onClick={action}
      style={{ backgroundColor: bgColor, color: color ? color : "#fff" }}
    >
      {icon} {text}
    </button>
  );
};

export default IconedButton;
