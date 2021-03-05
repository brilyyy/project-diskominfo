import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import axios from "axios";

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
      .get("http://localhost:8000/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const usersData = useMemo(() => {
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
            history.push("/konfigurasi/tambah");
          }}
        >
          Tambah
        </button>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100 text-base select-none ">
          <tr>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Nama
            </th>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Username
            </th>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Email
            </th>
            <th className="border border-gray-300 px-3 py-1 font-medium">
              Nama Desa
            </th>
          </tr>
        </thead>

        <tbody>
          {usersData.length !== 0 ? (
            usersData.map((user, key) => (
              <tr
                className="text-center h-11 select-none cursor-pointer hover:bg-gray-50"
                key={key}
                onClick={()=>{history.push(`/konfigurasi/${user.id}`)}}
              >
                <td className="border border-gray-300 py-2">{user.name}</td>
                <td className="border border-gray-300 py-2">{user.username}</td>
                <td className="border border-gray-300 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 py-2">
                  {user.village.nama_desa}
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
