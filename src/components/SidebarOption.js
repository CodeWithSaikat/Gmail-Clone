import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title, number, selected, IconTitle }) => {
  return (
    <div className={`sidebaroption  ${selected && `sidebaroption--active`}`}>
      {Icon && <Icon />}
      {title && <h4>{title}</h4>}
      {number && <p>{number}</p>}
    </div>
  );
};

export default SidebarOption;
