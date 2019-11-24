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
    actions as getEventActions,
    API as getEventAPI,
    Provider as GetEventProvider, 
    useContext as useGetEventContext,
    refreshOnLoad as refreshGetEventsOnLoad
}