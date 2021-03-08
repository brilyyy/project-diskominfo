import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import axios from "axios";
import API from "../../../config/API";

const Table = (props) => {
  const history = useHistory();
  const [data, setData] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    axios
      .get(API.url + "krawangan/details/" + props.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const krawangansData = useMemo(() => {
    let computedData = Array.from(data);

    setTotalItems(computedData.length);

    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage]);

  const changeNavbar = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div>
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
            history.push("/krawangan/details/tambah/" + props.id);
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
              Blok/Bagian Persil
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Nomor Letterc
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Nama
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Luas
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Mutasi
            </th>
          </tr>
        </thead>

        <tbody>
          {krawangansData.length !== 0 ? (
            krawangansData.map((krawangan, key) => (
              <tr
                className="text-center h-11 select-none cursor-pointer hover:bg-gray-50 text-sm"
                key={key}
              >
                <td className="border border-gray-300 p-1">{key + 1 + "."}</td>
                <td className="border border-gray-300 p-1">
                  {krawangan.blok_persil}
                </td>
                <td className="border border-gray-300 p-1">
                  {krawangan.nomor_letterc}
                </td>
                <td className="border border-gray-300 p-1">{krawangan.nama}</td>
                <td className="border border-gray-300 p-1">{krawangan.luas}</td>
                <td className="border border-gray-300 p-1">
                  {krawangan.mutasi}
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
