import React, { createContext, useReducer, useContext, useEffect } from "react";
import API from "./LocationAPI";
import actions from "./LocationActions.json";

const { LOCATION_LOADING,
  SET_USER_LOCATION,
  SET_SEARCH_LOCATION,
  LOCATION_ERROR,
  CLEAR_LOCATION_ERROR } = actions;

const LocationContext = createContext();
const { Provider } = LocationContext;

const reducer = (state, action) => {
  switch (action.type) {
    case LOCATION_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.events,
        loading: false,
        pageLoading: false
      };

    case SET_SEARCH_LOCATION:
      console.log("SET-SEARCH-LOCATION: ", action.events);
      return {
        ...state,
        searchLocation: action.events,
        loading: false,
        pageLoading: false
      };

    case LOCATION_ERROR:
      return {
        ...state,
        error: action.message,
        loading: false
      };

    case CLEAR_LOCATION_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

const LocationProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    userLocation: [],
    searchLocation: "",
    pageLoading: true,
    loading: false,
    error: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useLocationContext = () => {
  return useContext(LocationContext);
};

const refreshUserLocation = () => {
  const [{ loading }, locationsDispatch] = useLocationContext();
  useEffect(() => {
    if (loading) {
      return;
    }
    locationsDispatch({ type: LOCATION_LOADING });
    API.getlocation().then(location => {
      locationsDispatch({ type: SET_USER_LOCATION, location });
    });
  }, []);
};

export { LocationProvider as Provider, useLocationContext as useContext, refreshUserLocation as refreshOnLoad };
