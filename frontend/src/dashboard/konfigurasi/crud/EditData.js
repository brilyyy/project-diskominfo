import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Close from "../../component/CloseButton";
import axios from "axios";
import API from "../../../config/API";
import Loading from "../../component/LoadingOverlay";
import SubmitButton from "../../component/SubmitButton";

const EditData = () => {
  let { id } = useParams();
  let history = useHistory();
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    permissions: [],
    village_id: 0,
  });
  const [village, setVillage] = useState({});
  const [permissions, setPermissions] = useState({});
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
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

    axios
      .get(API.url + "users/" + id, {
        headers: {
          Authorization:
            "Bearer " + window.sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

    axios
      .get(API.url + "permissions", {
        headers: {
          Authorization:
            "Bearer " + window.sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setPermissions(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    axios
      .put(API.url + "users/" + id, data, {
        headers: {
          Authorization:
            "Bearer " + window.sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          setUploading(false);
          history.push("/konfigurasi");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response);
      });

    console.log(data);
  };

  const handleCheckBox = (e) => {
    console.log(e.target.value);
    if (data.permissions.includes(e.target.value)) {
      let i = data.permissions.indexOf(e.target.value);
      data.permissions.splice(i, 1);
    } else {
      data.permissions = [...data.permissions, e.target.value];
    }
  };

  return (
    <div className="p-4 min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-white px-5 py-4 rounded-lg shadow-md">
          <div className="flex justify-between">
            <h1 className="mb-6 text-3xl font-bold">Ubah Data User</h1>
            <Close />
          </div>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                {/* Input htmlForm */}
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
                        {Array.from(village).map((village, key) => (
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
                        onChange={handleChange}
                        value={data.name}
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
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        onChange={handleChange}
                        value={data.email}
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
                        onChange={handleChange}
                        value={data.username}
                      />
                    </div>
                  </div>
                </div>

                {/* End of input form */}
              </div>
              <div>
                <h1 className="mb-6 text-xl font-medium">Hak Akses</h1>
                {Array.from(permissions).map((permission, key) => (
                  <div className="mb-6" key={key}>
                    <div className="text-gray-700 md:flex md:items-center">
                      <input
                        type="checkbox"
                        value={permission.name}
                        onChange={handleCheckBox}
                        className="w-6 h-6 px-3 border rounded-lg focus:shadow-outline mr-3"
                        defaultChecked={data.permissions.includes(
                          permission.name
                        )}
                      />
                      <div className="mb-1 md:mb-0 md:w-1/3">
                        <label htmlFor="password_confirmation">
                          {permission.name.toUpperCase()}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-row-reverse">
              <SubmitButton uploading={uploading} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditData;
