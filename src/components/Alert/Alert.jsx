import React from "react";

const Alert = ({ open, warning }) => {
  return (
    <div
      className="alert-warning"
      style={{
        height: "40px",
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        color: "#856404"
      }}
    >
      <p>{warning}</p>
    </div>
  );
};

export default Alert;
