import axios from "axios";

export default {
  // Adds the user's location to the db
  addLocation: function () {
    return axios.post("/api/locations").then(({ data }) => data);
  },
  // Gets current user's location from the db
  getLocation: function () {
    return axios.get("/api/locations").then(({ data }) => data);
  },
};