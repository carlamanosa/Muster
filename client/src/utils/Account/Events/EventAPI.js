import axios from "axios";

const BASEURL = "https://api.seatgeek.com/2/events?";
const key = "client_id=MTk1OTI0NDF8MTU3NDQ1Mjc1MC43NQ&client_secret=24c6903bd6b5005c4d5de56d640bf9c071cf6f6a42b4a55c96dee81ebc08df14";
const params = "&taxonomies.name=concert&sort=score.desc"

export default {
  // Gets all events (from DB)
  getEvents: function() {
    return axios.get("/api/events").then(({data}) => data);
  },
  // Adds an event in the database
  addEvent: function(eventData) {
    return axios.post("/api/events", eventData).then(({data}) => data);
  },
  eventAPI: function(type) {
    return axios.get(BASEURL + key + params).then(({data}) => data.events);
  }
};