const API = {
  url: "http://192.168.1.15:8001/api/",
  header: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  },
};

export default API;
