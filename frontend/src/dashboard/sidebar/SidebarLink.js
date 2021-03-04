import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = (props) => {
  return (
    <NavLink
      to={props.linkto}
      activeClassName="bg-blue-400"
      className={
        "text-white hover:bg-blue-200 cursor-pointer p-3 " +
        (props.open ? "" : "text-center text-md")
      }
    >
      {props.open ? (
        <>
          <span className="mr-3">{props.icon}</span>
          <span className="">{props.title}</span>
        </>
      ) : (
        <span className="">{props.icon}</span>
      )}
    </NavLink>
  );
};

export default SidebarLink;
