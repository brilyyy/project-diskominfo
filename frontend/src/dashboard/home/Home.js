import React, { useEffect, useState } from "react";
import Logo from "../component/Logo";
import axios from "axios";
import API from "../../config/API";

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API.url + "user-detail", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="p-4 min-h-screen flex flex-col justify-center items-center">
      <Logo className="shadow-lg" width="w-2/5" />
      {loading ? (
        <></>
      ) : (
        <>
          <h1 className="mt-3 text-2xl font-semibold text-vk-text-light">
            Selamat Datang{" "}
            {localStorage.getItem("admin") === "true"
              ? ""
              : `Admin Desa ${data.village.nama_desa}`}
          </h1>
        </>
      )}
    </div>
  );
};

export default Home;
