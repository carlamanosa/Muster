import React, { createContext, useReducer, useContext, useEffect } from "react";
import API from "./EventAPI";
import actions from "./EventActions.json";
const { EVENTS_LOADING,
  SET_EVENTS,
  SET_API_EVENTS,
  ADD_EVENT,
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

    case SET_EVENTS:
      return {
        ...state,
        events: action.events,
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

    case ADD_EVENT:
      return {
        ...state,
        events: [action.event, ...state.events],
        loading: false
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
    apiParams: {},
    apiEvents: [],
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
      eventsDispatch({ type: SET_EVENTS, events });
    });
  }, []);
};

const refreshApiEvents = (params) => {
  const [{ loading }, eventsDispatch] = useEventContext();
  useEffect(() => {
    if (loading) {
      return;
    }
    eventsDispatch({ type: EVENTS_LOADING });
    API.eventAPI(params).then(events => {
      console.log("refreshApiEvents: ", events);
      eventsDispatch({ type: SET_API_EVENTS, events});
    });
  }, []);
};

export { EventProvider as Provider, useEventContext as useContext, refreshDbEvents as refreshDbOnLoad, refreshApiEvents as refreshApiOnLoad };
