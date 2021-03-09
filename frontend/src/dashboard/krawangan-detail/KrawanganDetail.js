import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Close from "../component/CloseButton";
import Table from "./table/Table";
import API from "../../config/API";
import axios from "axios";

const KrawanganDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(API.url + "krawangans/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [id]);

  return (
    <div className="min-h-screen p-4">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h1 className="mb-6 text-3xl font-bold">
            No Persil {data.no_persil}
          </h1>
          <Close />
        </div>
        <hr />
        <div className="mt-6">
          <div className="w-full flex flex-row justify-center mb-6">
            <img src={data.foto} alt="foto" className="w-2/3" />
          </div>
          <Table id={id} />
        </div>
      </div>
    </div>
  );
};

export default KrawanganDetail;
