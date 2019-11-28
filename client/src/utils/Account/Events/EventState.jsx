import React, { createContext, useReducer, useContext, useEffect } from "react";
import API from "./EventAPI";
import actions from "./EventActions.json";
const {
  EVENTS_LOADING,
  SET_USER_EVENTS,
  ADD_USER_EVENT,
  DELETE_USER_EVENT,
  SET_EVENT_STATE,
  SET_API_PARAMS,
  SET_API_EVENTS,
  EVENTS_ERROR,
  CLEAR_EVENTS_ERROR } = actions;

const EventContext = createContext();
const { Provider } = EventContext;

const reducer = (state, action) => {
  switch (action.type) {
    case EVENTS_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_USER_EVENTS:
      return {
        ...state,
        events: action.events,
        loading: false,
        pageLoading: false
      };

    case ADD_USER_EVENT:
      return {
        ...state,
        events: [action.event, ...state.events],
        loading: false
      };

    case DELETE_USER_EVENT:
      //NOT WORKING, JUST COPIED SET_USER_EVENTS
      return {
        ...state,
        events: action.events,
        loading: false,
        pageLoading: false
      };

    case SET_EVENT_STATE:
      return {
        ...state,
        events: action.events,
        loading: false,
        pageLoading: false
      };

    case SET_API_PARAMS:
      const testType = "events";
      const testTaxo = "taxonomies.name=concert"
      const key = "client_id=MTk1OTI0NDF8MTU3NDQ1Mjc1MC43NQ&client_secret=24c6903bd6b5005c4d5de56d640bf9c071cf6f6a42b4a55c96dee81ebc08df14";
      const queryURL = `https://api.seatgeek.com/2/${testType}?${testTaxo}&${key}`;
      console.log(action.events);
      return {
        ...state,
        apiQuery: queryURL,
        loading: false,
        pageLoading: false
      };

    case SET_API_EVENTS:
      console.log("SET-API-EVENTS: ", action.events);
      return {
        ...state,
        apiEvents: action.events,
        loading: false,
        pageLoading: false
      };

    case EVENTS_ERROR:
      return {
        ...state,
        error: action.message,
        loading: false
      };

    case CLEAR_EVENTS_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

const EventProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    events: [],
    apiQuery: "https://api.seatgeek.com/2/events?taxonomies.name=concert&client_id=MTk1OTI0NDF8MTU3NDQ1Mjc1MC43NQ&client_secret=24c6903bd6b5005c4d5de56d640bf9c071cf6f6a42b4a55c96dee81ebc08df14",
    apiEvents: [],
    location: {},
    pageLoading: true,
    loading: false,
    error: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useEventContext = () => {
  return useContext(EventContext);
};

const refreshDbEvents = () => {
  const [{ loading }, eventsDispatch] = useEventContext();
  useEffect(() => {
    if (loading) {
      return;
    }
    eventsDispatch({ type: EVENTS_LOADING });
    API.getEvents().then(events => {
      eventsDispatch({ type: SET_USER_EVENTS, events });
    });
  }, []);
};

const refreshApiEvents = () => {
  const [{ loading }, eventsDispatch] = useEventContext();
  const [{ apiQuery }] = useEventContext();

  useEffect(() => {
    if (loading) {
      return;
    }
    eventsDispatch({ type: EVENTS_LOADING });
    API.eventAPI(apiQuery).then(events => {
      console.log("refreshApiEvents: ", events);
      eventsDispatch({ type: SET_API_EVENTS, events });
    });
  }, []);
};

export { EventProvider as Provider, useEventContext as useContext, refreshDbEvents as refreshDbOnLoad, refreshApiEvents as refreshApiOnLoad };
