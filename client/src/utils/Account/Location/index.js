import actions from "./LocationActions.json";
import API from "./LocationAPI.js";
import { Provider, useContext, refreshOnLoad } from "./LocationState.jsx";

export default {
    actions,
    API,
    Provider, 
    useContext,
    refreshOnLoad
};

export {
    actions as locationActions,
    API as locationAPI,
    Provider as LocationProvider, 
    useContext as useLocationContext,
    refreshOnLoad as refreshLocationOnLoad
}