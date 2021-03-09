import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import axios from "axios";
import API from "../../../config/API";
import { AiTwotoneEye } from "react-icons/ai";

const Table = () => {
  const history = useHistory();
  const [data, setData] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [village, setVillage] = useState({});
  const [searchVillage, setSearchVillage] = useState("");

  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    axios
      .get(API.url + "krawangans", {
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
    if (localStorage.getItem("admin") === "true") {
      axios
        .get(API.url + "villages", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          setVillage(response.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, []);

  const krawangansData = useMemo(() => {
    let computedData = Array.from(data);

    if (searchVillage) {
      computedData = computedData.filter((i) => {
        return String(i.village_id) === searchVillage;
      });
    }

    setTotalItems(computedData.length);

    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage, searchVillage]);

  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  const handleChange = (e) => {
    setSearchVillage(e.target.value);
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
        {localStorage.getItem("admin") === "true" ? (
          <select
            onChange={handleChange}
            className="bg-white h-10 p-2 rounded-lg text-sm focus:outline-none border-gray-200 border-2"
          >
            <option value="">Semua Desa</option>
            {Array.from(village).map((village, key) => (
              <option value={village.id} key={key}>
                {village.nama_desa}
              </option>
            ))}
          </select>
        ) : (
          <></>
        )}
        <Pagination
          total={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <button
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          onClick={() => {
            history.push("/krawangan/tambah");
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
              Nomor Persil
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Desa
            </th>
            <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
              Action
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
                <td className="border border-gray-300 p-1">
                  {krawangan.id + "."}
                </td>
                <td className="border border-gray-300 p-1">
                  {krawangan.no_persil}
                </td>
                <td className="border border-gray-300 p-1">
                  {krawangan.village.nama_desa}
                </td>
                <td className="border border-gray-300 p-1">
                  <button
                    type="button"
                    className="focus:outline-none text-white text-sm p-2 bg-green-500 rounded-md hover:bg-green-600 hover:shadow-lg"
                    onClick={() => {
                      history.push(`/krawangan/details/${krawangan.id}`);
                    }}
                  >
                    <AiTwotoneEye />
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
