import React from "react";
import "./EmailListSection.css";

const EmailListSection = ({ Icon, color, selected, title }) => {
  return (
    <div
      className={`emaillistsection ${selected && `sectionselected`}`}
      style={{
        borderBottom: `1px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default EmailListSection;
