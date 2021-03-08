const API = {
  url: "http://localhost:8000/api/",
  header: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  },
};

export default API;
