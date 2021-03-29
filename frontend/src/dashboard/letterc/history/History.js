import React, { useState } from "react";
import Close from "../../component/CloseButton";
import HistoryList from "./detail-history/HistoryList";
import TreeView from "./detail-history/TreeView";

const UbahData = () => {
  const [switcher, setSwitcher] = useState(true);
  const [active, setActive] = useState(0);
  return (
    <div className="p-4 min-h-screen">
      <div className="w-full flex flex-row mb-6">
        <button
          onClick={() => {
            setSwitcher(true);
            setActive(0);
          }}
          className={
            "focus:outline-none text-white text-xs py-2.5 px-5 rounded-md hover:shadow-lg w-1/5 mx-2 " +
            (active === 0
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600")
          }
        >
          Historical Tree
        </button>
        <button
          onClick={() => {
            setSwitcher(false);
            setActive(1);
          }}
          className={
            "focus:outline-none text-white text-xs py-2.5 px-5 rounded-md hover:shadow-lg w-1/5 mx-2 " +
            (active === 1
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600")
          }
        >
          Historical List
        </button>
      </div>
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">
            {active === 0 ? "Historical Tree" : "Historical List"}
          </h1>
          <Close />
        </div>
        <hr />
        {switcher ? <TreeView /> : <HistoryList />}
      </div>
    </div>
  );
};

export default UbahData;
