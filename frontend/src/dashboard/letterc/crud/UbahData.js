import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Close from "../../component/CloseButton";
import EditData from "./detail-history/EditData";
import HistoryList from "./detail-history/HistoryList";

const UbahData = () => {
  let { id } = useParams();
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
          Data Details
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
          History
        </button>
      </div>
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">
            {active === 0 ? "Ubah Data Letter C" : "History Data Letter C"}
          </h1>
          <Close />
        </div>
        <hr />
        {switcher ? <EditData /> : <HistoryList />}
      </div>
    </div>
  );
};

export default UbahData;
