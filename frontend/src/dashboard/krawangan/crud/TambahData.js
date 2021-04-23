import React, { useEffect, useState } from "react";
import API from "../../../config/API";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Close from "../../component/CloseButton";
import SubmitButton from "../../component/SubmitButton";

const TambahData = () => {
  const history = useHistory();
  const [village, setVillage] = useState({});
  const [notImage, setNotImage] = useState(false);
  const [uploading, setUploading] = useState(false);
  const form = new FormData();
  const [data, setData] = useState({
    village_id: 0,
    no_persil: 0,
  });
  useEffect(() => {
    if (window.sessionStorage.getItem("admin") === "true") {
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
    }
  }, []);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e) => {
    console.log(e.target.files[0].type.split("/")[1]);
    if (e.target.files[0]) {
      if (e.target.files[0].type.split("/")[0] === "image") {
        form.append("image", e.target.files[0]);
        setNotImage(false);
      } else if (e.target.files[0].type.split("/")[1] === "pdf") {
        form.append("image", e.target.files[0]);
        setNotImage(false);
      } else {
        setNotImage(true);
      }
    } else {
      console.log("null");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    form.append("no_persil", data.no_persil);
    form.append("village_id", data.village_id);

    if (!notImage) {
      axios
        .post(API.url + "krawangans", form, {
          headers: {
            Authorization:
              "Bearer " + window.sessionStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          console.log(response);
          setTimeout(() => {
            setUploading(false);
            history.push("/krawangan");
          }, 3000);
        })
        .catch((err) => {
          console.log(err.response);
        });
      console.log(form);
    }
  };
  return (
    <div className="min-h-screen p-4">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">Tambah Data Krawangan</h1>
          <Close />
        </div>
        <hr />
        <form onSubmit={handleSubmit} className="mt-6">
          {window.sessionStorage.getItem("admin") === "true" ? (
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
          ) : (
            <></>
          )}

          <div className="mb-6">
            <div className="text-gray-700 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label htmlFor="no_persil">Nomor Persil</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="no_persil"
                  name="no_persil"
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
                <label htmlFor="image">Upload Foto</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="file"
                  id="image"
                  name="image"
                  autoComplete="off"
                  onChange={handleFileInput}
                  required
                />
                {notImage ? (
                  <span className="text-xs text-red-500 ml-1">
                    File yang dimasukkan bukan gambar
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-row-reverse">
            <SubmitButton uploading={uploading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahData;
