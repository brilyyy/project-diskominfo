import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = (props) => {
  return (
    <NavLink to={props.linkto}
    activeClassName='bg-red-200'
    >
      <p
        className={
          props.open
            ? "text-gray-800 font-bold hover:bg-blue-200 cursor-pointer p-3"
            : "text-gray-800 font-bold hover:bg-blue-200 cursor-pointer p-3 text-center text-lg"
        }
      >
        {props.open ? (
          <>
            <span className="pr-3">{props.icon}</span>
            <span className="">{props.title}</span>
          </>
        ) : (
          <span className="">{props.icon}</span>
        )}
      </p>
    </NavLink>
  );
};

export default SidebarLink;
