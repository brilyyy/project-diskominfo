import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import API from "../../../../config/API";

const MutasiSelect = (props) => {
  const [data, setData] = useState({});
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    axios
      .get(API.url + "lettercs", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setData(response.data.data);
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
    // if (search) {
    //   computedData = computedData.filter(
    //     (data) =>
    //       data.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
    //       data.nomor.toString().includes(search)
    //   );
    // }
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
          <label htmlFor="mutasi_bumi">Mutasi (dari letter c)</label>
        </div>
        <div className="md:w-2/3 md:flex-grow flex flex-row ">
          <input
            className="w-full h-10 px-3 text-sm placeholder-gray-600 border rounded-l-lg focus:shadow-outline"
            type="text"
            onChange={(e) => onSelectedInput(e.target.value)}
            autoComplete="off"
            placeholder="Cari Nama/Nomor"
            list="mutasiList"
          />
          <datalist id="mutasiList">
            {Array.from(dataArray).map((letterc, key) => (
              <option key={key} value={`${letterc.name}|${letterc.id}`}>
                Nomor Letterc : {letterc.nomor}, Nama : {letterc.name}
              </option>
            ))}
          </datalist>

          {/* <select
            onChange={(e) => onSelectedInput(e.target.value)}
            className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-r-lg focus:shadow-outline"
          >
            {Array.from(dataArray).map((letterc, key) => (
              <option key={key} value={`${letterc.id}|${letterc.name}`}>
                {`${letterc.name} - ${letterc.nomor}`}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </>
  );
};

export default MutasiSelect;
