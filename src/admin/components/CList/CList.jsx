import React from "react";
import { Link } from "react-router-dom";

const CList = ({ route, icon, name }) => {
  return (
    <Link to={`/admin/${route}`} className="s-list-item">
      <span className="s-list-item-icon">{icon}</span>
      <span className="s-list-item-name">{name}</span>
    </Link>
  );
};

export default CList;
