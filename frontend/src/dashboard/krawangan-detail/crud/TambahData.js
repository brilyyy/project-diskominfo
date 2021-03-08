import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Close from "../../component/CloseButton";
import API from "../../../config/API";

const TambahData = () => {
  let { id } = useParams();
  let history = useHistory();
  const [data, setData] = useState({
    krawangan_id: "",
    nomor_letterc: "",
    nama: "",
    luas: "",
    mutasi: "",
    blok_persil: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.krawangan_id = id;
    axios
      .post(API.url + "krawangan/details/", data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
    history.push("/krawangan/details/" + id);
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">Tambah Data</h1>
          <Close />
        </div>
        <hr />
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Input htmlForm */}
          <div className="mb-6">
            <div className="text-gray-700 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label htmlFor="nama">Nama</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="nama"
                  name="nama"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-700 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label htmlFor="blok_persil">Blok/Bagian Persil</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="blok_persil"
                  name="blok_persil"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-700 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label htmlFor="nomor_letterc">Nomor Letter C</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="nomor_letterc"
                  name="nomor_letterc"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-700 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label htmlFor="luas">Luas</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="luas"
                  name="luas"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-gray-700 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label htmlFor="mutasi">Mutasi</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="mutasi"
                  name="mutasi"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* End of input form */}

          <div className="mt-10 flex flex-row-reverse">
            <button className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahData;
