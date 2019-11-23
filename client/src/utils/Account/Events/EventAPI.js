import axios from "axios";

export default {
  // Gets all events (from DB)
  getEvents: function() {
    return axios.get("/api/events").then(({data}) => data);
  },
  // Adds an event in the database
  addEvent: function(eventData) {
    return axios.post("/api/events", eventData).then(({data}) => data);
  },
  //Gets events from eventseat API
  eventAPI: function(params) {
    return axios.post("/api/events", params).then(({data}) => data);
  }
};