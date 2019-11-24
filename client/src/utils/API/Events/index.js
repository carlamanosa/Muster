import actions from "./GetEventActions.json";
import API from "./GetEventAPI.js";
import { Provider, useContext, refreshOnLoad } from "./GetEventState.jsx";

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