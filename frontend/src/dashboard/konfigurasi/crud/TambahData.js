import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Close from "../../component/CloseButton";
import axios from "axios";
import API from "../../../config/API";

const TambahData = () => {
  let history = useHistory();
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    roles: [],
    village_id: 0,
  });
  const [village, setVillage] = useState({});
  const [roles, setRoles] = useState({});
  const [notmatch, setNotmatch] = useState(false);

  useEffect(() => {
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
    axios
      .get(API.url + "roles", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setRoles(response.data.data);
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
    if (data.password === data.password_confirmation) {
      axios
        .post(API.url + "register", data, {
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
      history.push("/konfigurasi");
    } else {
      setNotmatch(true);
    }
  };

  const handleCheckBox = (e) => {
    console.log(e.target.value);
    if (data.roles.includes(e.target.value)) {
      let i = data.roles.indexOf(e.target.value);
      data.roles.splice(i, 1);
    } else {
      data.roles = [...data.roles, e.target.value];
    }
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">Tambah Data User</h1>
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
                      required
                    >
                      <option value="">Semua Desa</option>
                      {Array.from(village).map((village, key) => (
                        <option value={village.id} key={key}>
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
                      name="name"
                      autoComplete="off"
                      onChange={handleChange}
                      required
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
                      name="email"
                      autoComplete="off"
                      onChange={handleChange}
                      required
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
                      name="username"
                      autoComplete="off"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="password"
                      name="password"
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-gray-700 md:flex md:items-center">
                  <div className="mb-1 md:mb-0 md:w-1/3">
                    <label htmlFor="password_confirmation">
                      Konfirmasi Password
                    </label>
                  </div>
                  <div className="md:w-2/3 md:flex-grow">
                    <input
                      className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="password"
                      name="password_confirmation"
                      autoComplete="off"
                      onChange={handleChange}
                      onClick={() => {
                        setNotmatch(false);
                      }}
                    />
                    {notmatch ? (
                      <span className="text-xs text-red-500 ml-1">
                        Password tidak sama
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>

              {/* End of input form */}
            </div>
            <div>
              <h1 className="mb-6 text-xl font-medium">Hak Akses</h1>
              {Array.from(roles).map((role, key) => (
                <div className="mb-6">
                  <div className="text-gray-700 md:flex md:items-center">
                    <input
                      type="checkbox"
                      value={role.name}
                      key={key}
                      onChange={handleCheckBox}
                      className="w-6 h-6 px-3 border rounded-lg focus:shadow-outline mr-3"
                    />
                    <div className="mb-1 md:mb-0 md:w-1/3">
                      <label htmlFor="password_confirmation">
                        {role.name.toUpperCase()}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-row-reverse">
            <button className="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahData;
