import axios from "axios";

export default {
  // Gets all events (from DB)
  getUserEvents: function() {
    return axios.get("/api/events").then(({data}) => data);
  },
  // Adds an event in the database
  updateEvents: function(eventData) {
    return axios.post("/api/events", eventData).then(({data}) => data);
  },
  eventAPI: function(queryURL) {
    return axios.get(queryURL).then(({data}) => data.events);
  }
};