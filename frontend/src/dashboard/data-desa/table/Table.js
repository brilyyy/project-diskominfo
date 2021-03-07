import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import axios from "axios";
import API from "../../../config/API";

const Table = () => {
  const history = useHistory();
  const [data, setData] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    axios
      .get(API.url + "villages", API.header )
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const villagesData = useMemo(() => {
    let computedData = Array.from(data);

    setTotalItems(computedData.length);

    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage]);

  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className="bg-white px-3 py-4 rounded-lg shadow-md">
      <div
        className={
          "transition-all duration-500 flex items-center w-full justify-between mb-4 select-none sticky top-0 " +
          (!navbar ? "" : "bg-gray-100 drop-shadow-md p-3 rounded-sm")
        }
      >
        <Pagination
          total={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <button
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          onClick={() => {
            history.push("/data-desa/tambah");
          }}
        >
          Tambah
        </button>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100 text-base select-none ">
          <tr>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Nama Desa
            </th>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Status
            </th>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Alamat
            </th>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Kecamatan
            </th>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Kepala Desa
            </th>
          </tr>
        </thead>

        <tbody>
          {villagesData.length !== 0 ? (
            villagesData.map((village, key) => (
              <tr
                className="text-center h-11 select-none cursor-pointer hover:bg-gray-50"
                key={key}
                onClick={()=>{history.push(`/data-desa/ubah/${village.id}`)}}
              >
                <td className="border border-gray-300 py-2">{village.nama_desa}</td>
                <td className="border border-gray-300 py-2">{village.status}</td>
                <td className="border border-gray-300 py-2">
                  {village.alamat}
                </td>
                <td className="border border-gray-300 py-2">
                  {village.kecamatan}
                </td>
                <td className="border border-gray-300 py-2">
                  {village.kepala_desa}
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan="12" className="border border-gray-300 p-5">
                {loading ? (
                  <span className="text-xl">Loading...</span>
                ) : (
                  <span className="text-xl">Data Not Found</span>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
