import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination/Pagination";
import Search from "./Search";
import axios from "axios";
import { generateSuratTanah } from "../generator/GenerateDocument";
import API from "../../../config/API";
import { BiPrinter } from "react-icons/bi";
import Loading from "../../component/LoadingOverlay";

const Table = () => {
  const [data, setData] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [village, setVillage] = useState({});
  const [searchVillage, setSearchVillage] = useState("");

  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    axios
      .get(API.url + "lettercs", {
        headers: {
          Authorization:
            "Bearer " + window.sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
    axios
      .get(API.url + "villages", {
        headers: {
          Authorization:
            "Bearer " + window.sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setVillage(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const lettercData = useMemo(() => {
    let computedData = Array.from(data);
    if (search) {
      computedData = computedData.filter(
        (data) =>
          data.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
          data.nomor.toString().includes(search)
      );
    }

    if (searchVillage) {
      computedData = computedData.filter((i) => {
        console.log(i);
        return String(i.village_id) === searchVillage;
      });
      console.log(computedData);
    }

    setTotalItems(computedData.length);

    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [data, currentPage, search, searchVillage]);

  const changeNavbar = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  const getPage = () => {
    return currentPage > 1 ? currentPage * 10 : 0;
  };

  window.addEventListener("scroll", changeNavbar);

  const handleChange = (e) => {
    setSearchVillage(e.target.value);
  };

  return (
    <div className="bg-white px-3 py-4 rounded-lg shadow-md">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className={
              "transition-all duration-500 flex items-center w-full justify-between mb-4 select-none sticky top-0 " +
              (!navbar ? "" : "bg-gray-100 drop-shadow-md p-3 rounded-sm")
            }
          >
            <Search
              onSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
            />
            {window.sessionStorage.getItem("admin") === "true" ? (
              <select
                name=""
                id=""
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
          </div>

          <table className="w-full">
            <thead className="bg-gray-100 text-base select-none ">
              <tr>
                <th
                  rowSpan="3"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  No.
                </th>
                <th
                  rowSpan="3"
                  className="border border-gray-300 px-2 py-1 font-medium w-36 text-sm"
                >
                  Nama Wajib Pajak
                </th>
                <th
                  rowSpan="3"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  Nomor
                </th>
                <th
                  rowSpan="3"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  Tempat Tinggal
                </th>
                <th
                  colSpan="8"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  Bumi
                </th>
                <th
                  colSpan="2"
                  rowSpan="2"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  Bangunan
                </th>
                <th
                  rowSpan="3"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  Action
                </th>
              </tr>
              <tr>
                <th
                  colSpan="4"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  Sawah
                </th>
                <th
                  colSpan="4"
                  className="border border-gray-300 px-2 py-1 font-medium text-sm"
                >
                  Darat
                </th>
              </tr>
              <tr>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Nomor Persil
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Desa
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Nasional
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Luas
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Nomor Persil
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Desa
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Nasional
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Luas
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm w-32">
                  Di Persil dan Bagian Persil Nomor
                </th>
                <th className="border border-gray-300 px-2 py-1 font-medium text-sm">
                  Gol/Kelas
                </th>
              </tr>
            </thead>

            <tbody>
              {lettercData.length !== 0 ? (
                lettercData.map((letterc, key) => (
                  <tr
                    className="text-center h-11 select-none cursor-pointer hover:bg-gray-50 text-sm"
                    key={key}
                  >
                    <td className="border border-gray-300 p-1">
                      {key + 1 + getPage() + "."}
                    </td>
                    <td className="border border-gray-300 p-1 max-w-0 overflow-ellipsis whitespace-nowrap overflow-hidden">
                      {letterc.name}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.nomor}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.tempat_tinggal}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.no_persil_sawah}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.desa_sawah}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.nasional_sawah}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.luas_sawah}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.no_persil_darat}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.desa_darat}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.nasional_darat}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.luas_darat}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.no_persil_bangunan}
                    </td>
                    <td className="border border-gray-300 p-1">
                      {letterc.gol_bangunan}
                    </td>
                    <td className="border border-gray-300 p-1">
                      <button
                        type="button"
                        className="focus:outline-none text-white text-sm p-2 bg-green-500 hover:bg-green-600 hover:shadow-lg rounded-md"
                        onClick={() => generateSuratTanah(letterc.id)}
                      >
                        <BiPrinter />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td colSpan="15" className="border border-gray-300 p-5">
                    <span className="text-xl">Data Not Found</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Table;
