import actions from "./EventActions.json";
import API from "./EventAPI.js";
import { Provider, useContext, refreshOnLoad } from "./EventState.jsx";

export default {
    actions,
    API,
    Provider, 
    useContext,
    refreshOnLoad
};

export {
    actions as eventActions,
    API as eventAPI,
    Provider as EventProvider, 
    useContext as useEventContext,
    refreshOnLoad as refreshEventsOnLoad
}