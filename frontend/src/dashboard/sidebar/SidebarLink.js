import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = (props) => {
  const [tooltip, setTooltip] = useState(false);

  const classLink = (a, b) => {
    let c = null;
    if (a && b) {
      c = "pl-6";
    } else if (a) {
      c = "pl-3";
    } else {
      c = "text-md justify-center pl-3";
    }
    return c;
  };

  return (
    <NavLink
      to={props.linkto}
      activeClassName="bg-blue-400"
      className={
        "text-white hover:bg-blue-200 cursor-pointer py-3 pr-3 flex " +
        classLink(props.open, props.dropdown)
      }
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      {props.open ? (
        <>
          <span className="mr-3">{props.icon}</span>
          <span className="">{props.title}</span>
        </>
      ) : (
        <div>
          <span>{props.icon}</span>
          <span
            className={
              "mt-1 bg-gray-500 bg-opacity-80 whitespace-nowrap text-center text-sm antialiased p-1 rounded-md " +
              (tooltip ? "absolute" : "hidden")
            }
          >
            {props.tooltip}
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default SidebarLink;
