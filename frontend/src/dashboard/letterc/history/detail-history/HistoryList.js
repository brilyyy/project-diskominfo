import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import API from "../../../../config/API";
import LoadingOverlay from "../../../component/LoadingOverlay";

const HistoryList = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API.url + "lettercs/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.response));
    console.log(data);
  }, []);

  return (
    <div className="mt-6">
      {loading ? (
        <LoadingOverlay />
      ) : (
        <table className="w-full">
          <thead className="bg-gray-100 text-base select-none">
            <tr>
              <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                Nomor Letter C
              </th>
              <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                Nama Letter C
              </th>
              <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {data.parent !== null ? (
              <tr className="text-center h-11 select-none cursor-pointer hover:bg-gray-50 text-sm">
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  {data.parent !== null ? data.parent.nomor : ""}
                </td>
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  {data.parent !== null ? data.parent.name : ""}
                </td>
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  <span className="text-red-600">Data Parent</span>
                </td>
              </tr>
            ) : (
              <></>
            )}

            <tr className="text-center h-11 select-none cursor-pointer hover:bg-gray-50 text-sm">
              <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                {data.nomor}
              </td>
              <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                {data.name}
              </td>
              <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                <span className="text-green-600">Data Saat Ini</span>
              </td>
            </tr>
            {data.children.map((child) => (
              <tr className="text-center h-11 select-none cursor-pointer hover:bg-gray-50 text-sm">
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  {child.nomor}
                </td>
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  {child.name}
                </td>
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  <span className="text-yellow-600">Data Child</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryList;
