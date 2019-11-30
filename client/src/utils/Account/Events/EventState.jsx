import React, { createContext, useReducer, useContext, useEffect } from "react";
import API from "./EventAPI";
import actions from "./EventActions.json";
const {
  EVENTS_LOADING,
  SET_USER_EVENTS,
  SET_API_EVENTS,
  SET_API_QUERY,
  SET_QUERY_DATES,
  ADD_USER_EVENT,
  DELETE_USER_EVENT,
  SET_EVENT_STATE,
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

    case SET_API_EVENTS:
      return {
        ...state,
        apiEvents: action.results,
        loading: false,
        pageLoading: false
      };

    case SET_API_QUERY:
      return {
        ...state,
        apiQuery: action.queryURL,
        loading: false,
        pageLoading: false
      };

    case SET_QUERY_DATES:
      console.log("SET-QUERY-DATES: ", action.dates);
      return {
        ...state,
        queryDates: {...state.queryDates,
        startDate: action.today},
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
    apiEvents: [],
    apiQuery: "",
    queryDates: {
      startDate: "",
      endDate: ""
    },
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
  const [{ loading }, eventDispatch] = useEventContext();
  useEffect(() => {
    if (loading) {
      return;
    }
    eventDispatch({ type: EVENTS_LOADING });
    API.getUserEvents().then(events => {
      eventDispatch({ type: SET_USER_EVENTS, events });
    });
  }, []);
};

const refreshApiEvents = () => {
  const [{ loading }, eventDispatch] = useEventContext();
  const [{ apiQuery }] = useEventContext();

  useEffect(() => {
    if (loading) {
      return;
    }
    eventDispatch({ type: EVENTS_LOADING });
    API.eventAPI(apiQuery).then(events => {
      eventDispatch({ type: SET_API_EVENTS, events });
    });
  }, []);
};


export { EventProvider as Provider, useEventContext as useContext, refreshDbEvents as refreshDbOnLoad, refreshApiEvents as refreshApiOnLoad };
