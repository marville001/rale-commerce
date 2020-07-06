import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IconedButton = ({
  icon,
  text,
  bgColor,
  color,
  shadow,
  action,
  width,
  link,
  to,
  linkName
}) => {
  return (
    <button
      onClick={action ? action : null}
      style={{
        backgroundColor: bgColor,
        color: color ? color : "#fff",
        boxShadow: shadow && shadow,
        width: width && width
      }}
    >
      {link ? (
        <Link
          style={{
            backgroundColor: bgColor,
            color: color && color,
            width: "100%",
            margin: "0px",
            fontSize: "inherit",
            padding: "0px"
          }}
          to={to}
        >
          {linkName}
        </Link>
      ) : (
        <>
          {icon} {text}
        </>
      )}
    </button>
  );
};

IconedButton.prototype = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  link: PropTypes.bool,
  to: PropTypes.string,
  linkName: PropTypes.string
};

export default IconedButton;
