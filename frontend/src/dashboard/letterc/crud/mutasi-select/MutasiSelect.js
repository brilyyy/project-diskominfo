import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import API from "../../../../config/API";

const MutasiSelect = (props) => {
  const [data, setData] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(true);

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
  }, []);

  const dataArray = useMemo(() => {
    let computedData = Array.from(data);
    if (props.villageId) {
      computedData = computedData.filter(
        (i) => String(i.village_id) === props.villageId
      );
    }
    return computedData;
  }, [data, props.villageId]);

  const onSelectedInput = (value) => {
    setSelectedValue(value);
    props.selectThis(value);
  };

  return (
    <>
      <div className="text-gray-700 md:flex md:items-center">
        <div className="mb-1 md:mb-0 md:w-1/3">
          <label htmlFor="mutasi_bumi">Mutasi</label>
        </div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div className="md:w-2/3 md:flex-grow flex flex-row ">
            <input
              className="w-full h-10 px-3 text-sm placeholder-gray-600 border rounded-l-lg focus:shadow-outline"
              type="text"
              onChange={(e) => onSelectedInput(e.target.value)}
              list="mutasiList"
              name="mutasi"
              placeholder="Masukkan Nama/Ambil dari Letter C sebelumnya"
              defaultValue={props.defValue}
              autoComplete="off"
            />
            <datalist id="mutasiList">
              {Array.from(dataArray).map((letterc, key) =>
                props.edit ? (
                  letterc.id !== props.lettercId &&
                  letterc.id < props.lettercId && (
                    <option key={key} value={`${letterc.name}|${letterc.id}`}>
                      Nomor Letterc : {letterc.nomor}, Nama : {letterc.name}
                    </option>
                  )
                ) : (
                  <option key={key} value={`${letterc.name}|${letterc.id}`}>
                    Nomor Letterc: {letterc.nomor}, Nama: {letterc.name}, Luas
                    Sawah: {letterc.luas_sawah}, Luas Darat:{" "}
                    {letterc.luas_darat}
                  </option>
                )
              )}
            </datalist>
          </div>
        )}
      </div>
    </>
  );
};

export default MutasiSelect;
