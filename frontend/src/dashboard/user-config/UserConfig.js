import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../../config/API";
import Close from "../component/CloseButton";
import LoadingOverlay from "../component/LoadingOverlay";
import { useHistory } from "react-router-dom";
import SubmitButton from "../component/SubmitButton";

const UserConfig = () => {
  let history = useHistory();
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState({});
  const [dataDesa, setDataDesa] = useState({
    village_id: 0,
    kepala_desa: "",
    nip_desa: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API.url + "user-detail", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  });
  const handleChange = (e) => {
    setDataDesa({ ...dataDesa, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.village_id);
    console.log(data);
    console.log(dataDesa);
    setUploading(true);
    axios
      .put(API.url + "villages/" + data.village_id, dataDesa, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          setUploading(false);
          history.push("/");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="p-4 min-h-screen">
      {isLoading ? (
        <LoadingOverlay />
      ) : (
        <>
          <div className="bg-white px-5 py-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h1 className="mb-6 text-3xl font-bold">Profile</h1>
              <Close />
            </div>
            <hr />
            <form onSubmit={handleSubmit} className="mt-6">
              {/* Input htmlForm */}

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="name">Nama User</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="off"
                      value={data.name}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="email"
                      name="email"
                      autoComplete="off"
                      value={data.email}
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="off"
                      value={data.username}
                      disabled
                    />
                  </div>
                </div>
              </div>

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
                      value={data.village.nama_desa}
                      disabled
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
                      value={data.village.status}
                      disabled
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
                      value={data.village.alamat}
                      disabled
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
                      value={data.village.kecamatan}
                      disabled
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
                      value={data.village.no_surat}
                      disabled
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
                      defaultValue={data.village.kepala_desa}
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
                      defaultValue={data.village.nip_desa}
                    />
                  </div>
                </div>
              </div>

              {/* End of input form */}

              <div className="mt-10 flex flex-row-reverse">
                <SubmitButton uploading={uploading} />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default UserConfig;
