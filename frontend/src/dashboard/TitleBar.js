import React from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import API from "../config/API";
import { useHistory } from "react-router-dom";

const TitleBar = (props) => {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleLogout = () => {
    axios.post(API.url + "logout", {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("accessToken"),
      },
    });
    window.sessionStorage.removeItem("accessToken");
    window.sessionStorage.removeItem("admin");
    window.location.reload();
  };
  const handleUser = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="w-full py-4 px-5 flex flex-row justify-between">
      <h1 className="text-vk-text-light font-semibold text-xl">
        {props.title}
      </h1>
      <button
        className={
          "text-2xl focus:outline-none " +
          (open ? "text-blue-500" : "text-vk-text-light")
        }
        onClick={handleUser}
      >
        <FaUserCircle />
      </button>

      <div
        className={
          "origin-top-right right-0 mt-11 mr-2 w-56 rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10 " +
          (open ? "absolute" : "hidden")
        }
      >
        <div className="py-1 select-none cursor-pointer" role="none">
          {window.sessionStorage.getItem("admin") === "false" ? (
            <span
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => history.push("/profile")}
            >
              Profile
            </span>
          ) : (
            <></>
          )}
          <span
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            onClick={handleLogout}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
