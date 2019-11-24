import React, { createContext, useReducer, useContext, useEffect } from "react";
import API from "./GetEventAPI";
import actions from "./GetEventActions.json";
const { GET_EVENTS_LOADING,
  SET_GET_EVENTS,
  ADD_GET_EVENT,
  GET_EVENTS_ERROR,
  CLEAR_GET_EVENTS_ERROR } = actions;

const GetEventContext = createContext();
const { Provider } = GetEventContext;

const reducer = (state, action) => {
  switch (action.type) {
    case GET_EVENTS_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_GET_EVENTS:
      return {
        ...state,
        getEvents: action.events,
        loading: false,
        pageLoading: false
      };

    case ADD_GET_EVENT:
      return {
        ...state,
        getEvents: [action.getEvent, ...state.getEvents],
        loading: false
      };

    case GET_EVENTS_ERROR:
      return {
        ...state,
        error: action.message,
        loading: false
      };

    case CLEAR_GET_EVENTS_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

const GetEventProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    getEvents: [],
    pageLoading: true,
    loading: false,
    error: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGetEventContext = () => {
  return useContext(GetEventContext);
};

const refreshGetEvents = () => {
  const [{ loading }, getEventsDispatch] = useGetEventContext();
  useEffect(() => {
    if (loading) {
      return;
    }
    getEventsDispatch({ type: GET_EVENTS_LOADING });
    API.getEvents().then(events => {
      getEventsDispatch({ type: SET_GET_EVENTS, getEvents });
    });
  }, []);
};

export { GetEventProvider as Provider, useGetEventContext as useContext, refreshGetEvents as refreshOnLoad };
