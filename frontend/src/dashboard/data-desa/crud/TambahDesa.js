import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Close from '../../component/CloseButton';
import axios from "axios";
import API from "../../../config/API"

const TambahDesa = () => {
  let history = useHistory();
  const [data, setData] = useState({
    nama_desa: '',
    status: '',
    alamat: '',
    kecamatan: '',
    no_surat: '',
    kepala_desa: '',
    nip_desa: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(API.url + "villages/", data, API.header)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
    history.push("/data-desa");
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className='flex justify-between'>
          <h1 className="mb-6 text-3xl font-bold">Tambah Data Desa</h1>
          <Close />
        </div>
        <hr/>
        <form onSubmit={handleSubmit} className='mt-6'>
          
              {/* Input htmlForm */}
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="nama_desa">Nama Desa</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="nama_desa"
                      name="nama_desa"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="status">Status</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="status"
                      name="status"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="alamat">Alamat Kantor</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="alamat"
                      name="alamat"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="kecamatan">Kecamatan</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="kecamatan"
                      name="kecamatan"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="no_surat">Nomor Surat</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="no_surat"
                      name="no_surat"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="kepala_desa">Kepala Desa</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="kepala_desa"
                      name="kepala_desa"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="nip_desa">NIP</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="nip_desa"
                      name="nip_desa"
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

export default TambahDesa;
