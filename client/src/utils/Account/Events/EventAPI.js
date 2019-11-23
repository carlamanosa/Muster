import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events").then(({data}) => data);
  },
  // Creates an event in the database
  createEvent: function(eventData) {
    return axios.post("/api/events", eventData).then(({data}) => data);
  }
};