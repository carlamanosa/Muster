import axios from "axios";

export default {
  // Gets current user
  getUser: function () {
    return axios.get("/api/user_data").then(({ data }) => data);
  },
  // Logs user in
  logout: function () {
    return axios.post("/api/logout").then(({ data }) => data);
  },
  // Logs user in
  login: function (userData) {
    return axios.post("/api/login", userData).then(({ data }) => data);
  },
  // Creates a user and logs them in
  signup: function (userData) {
    return axios.post("/api/signup", userData).then(({ data }) => data);
  },
  // Gets aboutUser
  getAboutUser: function (aboutUserData) {
    return axios.get("/api/abouts", aboutUserData).then(({ data }) => data);
  },
  // Updates aboutUser
  setAboutUser: function (aboutUserData) {
    return axios.post("/api/abouts", aboutUserData).then(({ data }) => data);
  }
};