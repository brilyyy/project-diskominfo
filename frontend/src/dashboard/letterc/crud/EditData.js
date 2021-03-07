import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Close from "../../component/CloseButton";
import API from "../../../config/API";

const EditData = () => {
  let history = useHistory();
  let { id } = useParams();
  const [data, setData] = useState({
    desa_darat: "",
    desa_sawah: "",
    tempat_tinggal: "",
    gol_bangunan: "",
    luas_bangunan: "",
    luas_darat: "",
    luas_sawah: "",
    mutasi_bangunan: "",
    mutasi_bumi: "",
    nama: "",
    nasional_darat: "",
    nasional_sawah: "",
    no_persil_bangunan: "",
    no_persil_darat: "",
    no_persil_sawah: "",
    nomor: 0,
    pajak_bangunan: "",
    pajak_darat: "",
    pajak_sawah: "",
    village_id: 0,
  });
  const [villages, setVillages] = useState({});

  useEffect(() => {
    if (localStorage.getItem("admin") === "true") {
      axios
        .get(API.url + "villages", API.header)
        .then((response) => {
          setVillages(response.data.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    axios
      .get(API.url + "lettercs/" + id, API.header)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(API.url + "lettercs/" + id, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
    history.push("/letterc");
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">Ubah Data Letter C</h1>
          <Close />
        </div>
        <hr />
        <form onSubmit={handleSubmit} className="mt-6">
          {localStorage.getItem("admin") === "true" ? (
            <div className="mb-6">
              <div className="text-gray-700 md:flex md:items-center">
                <div className="mb-1 md:mb-0 md:w-1/3">
                  <label htmlFor="nama">Pilih Desa</label>
                </div>
                <div className="md:w-2/3 md:flex-grow">
                  <select
                    name="village_id"
                    onChange={handleChange}
                    className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  >
                    <option value="">Semua Desa</option>
                    {Array.from(villages).map((village, key) => (
                      <option
                        value={village.id}
                        key={key}
                        selected={village.id === data.village_id}
                      >
                        {village.nama_desa}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div>
            <div>
              {/* Input htmlForm */}

              {/* Utama */}
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="nama">Nama Wajib Pajak</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="nama"
                      name="nama"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.nama}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="nomor">Nomor</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="number"
                      id="nomor"
                      name="nomor"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.nomor}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="tempat_tinggal">Tempat Tinggal</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="tempat_tinggal"
                      name="tempat_tinggal"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.tempat_tinggal}
                    />
                  </div>
                </div>
              </div>

              {/* 1.Bumi */}

              <h1 className="text-2xl font-semibold mb-6 ">Bumi</h1>

              {/* 1a. Sawah */}

              <h1 className="text-xl font-semibold mb-6 ml-4">Sawah</h1>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="no_persil_sawah">
                      Nomor Persil dan Bagian Persil
                    </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="no_persil_sawah"
                      name="no_persil_sawah"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.no_persil_sawah}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="desa_sawah">Desa</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="desa_sawah"
                      name="desa_sawah"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.desa_sawah}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="nasional_sawah">Nasional</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="nasional_sawah"
                      name="nasional_sawah"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.nasional_sawah}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="luas_sawah">Luas (m2) </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="luas_sawah"
                      name="luas_sawah"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.luas_sawah}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="pajak_sawah">Pajak (Rp) </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="pajak_sawah"
                      name="pajak_sawah"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.pajak_sawah}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="mutasi_bumi">Mutasi </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="mutasi_bumi"
                      name="mutasi_bumi"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.mutasi_bumi}
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-xl font-semibold mb-6 ml-4">Darat</h1>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="no_persil_darat">
                      Nomor Persil dan Bagian Persil
                    </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="no_persil_darat"
                      name="no_persil_darat"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.no_persil_darat}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="desa_darat">Desa </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="desa_darat"
                      name="desa_darat"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.desa_darat}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="nasional_darat">Nasional </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="nasional_darat"
                      name="nasional_darat"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.nasional_darat}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="luas_darat">Luas (m2) </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="luas_darat"
                      name="luas_darat"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.luas_darat}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-4">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="pajak_darat">Pajak (Rp) </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="pajak_darat"
                      name="pajak_darat"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.pajak_darat}
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-2xl font-semibold mb-6 ">Bangunan</h1>

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="no_persil_bangunan">
                      Nomor Persil dan Bagian Persil
                    </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="no_persil_bangunan"
                      name="no_persil_bangunan"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.no_persil_bangunan}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="gol_bangunan">Golongan</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="gol_bangunan"
                      name="gol_bangunan"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.gol_bangunan}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="luas_bangunan">Luas (m2)</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="luas_bangunan"
                      name="luas_bangunan"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.luas_bangunan}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="pajak_bangunan">Pajak (Rp)</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="pajak_bangunan"
                      name="pajak_bangunan"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.pajak_bangunan}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="mutasi_bangunan">Mutasi</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="mutasi_bangunan"
                      name="mutasi_bangunan"
                      autoComplete="off"
                      onChange={handleChange}
                      value={data.mutasi_bangunan}
                    />
                  </div>
                </div>
              </div>

              {/* End of input form */}
            </div>
          </div>
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

export default EditData;
