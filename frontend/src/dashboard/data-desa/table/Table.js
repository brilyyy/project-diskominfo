import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import axios from "axios";
import API from "../../../config/API";
import { BiPencil } from "react-icons/bi";

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
      .get(API.url + "villages", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
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
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              No.
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Nama Desa
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Status
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Alamat
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Kecamatan
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Kepala Desa
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              NIP
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {villagesData.length !== 0 ? (
            villagesData.map((village, key) => (
              <tr
                className="text-center h-11 select-none cursor-pointer hover:bg-gray-50 text-sm"
                key={key}
              >
                <td className="border border-gray-300 p-1">
                  {village.id - 1 + "."}
                </td>
                <td className="border border-gray-300 p-1">
                  {village.nama_desa}
                </td>
                <td className="border border-gray-300 p-1">{village.status}</td>
                <td className="border border-gray-300 p-1">{village.alamat}</td>
                <td className="border border-gray-300 p-1">
                  {village.kecamatan}
                </td>
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  {village.kepala_desa}
                </td>
                <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                  {village.nip_desa}
                </td>
                <td className="border border-gray-300 p-1">
                  <button
                    type="button"
                    className="focus:outline-none text-white text-sm p-2 bg-yellow-500 rounded-md hover:bg-yellow-600 hover:shadow-lg"
                    onClick={() => {
                      history.push(`/data-desa/ubah/${village.id}`);
                    }}
                  >
                    <BiPencil />
                  </button>
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
