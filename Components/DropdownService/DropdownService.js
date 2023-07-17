import React, { Children } from "react";

const DropdownMenu = (props) => {
  return (
    <div className="headerDropdownContainer">
      {props.menu}
      <div className="dropdown">
        <div className="upArrowContainer">
          <div className="upArrow"></div>
        </div>
        <div className="dropdownMenu">
          <div className="headerDropdownMenu">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
