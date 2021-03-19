import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../config/API";
import Tree from "react-d3-tree";
import Loading from "../component/LoadingOverlay";
import { useParams } from "react-router-dom";

const TreeView = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API.url + "letterc-tree/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setData(res.data.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="p-4 min-h-screen">
      <div className="bg-white px-5 py-4 rounded-lg shadow-md">
        {loading ? (
          <Loading />
        ) : (
          <div id="treeWrapper" style={{ width: "100%", height: "100vh" }}>
            <Tree
              data={data}
              orientation="vertical"
              translate={{
                x: 600,
                y: 150,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeView;
