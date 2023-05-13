import {
    GET_ALL_RESTORANTS,
    GET_AMOUNTPAGES,
    GET_FILTERED
} from "./actionsTypes";

const initialState = {
    restorants: [],
    allRestorants: [],
    AmountPage:"",
    Error:[]
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_RESTORANTS:
            return {
                ...state,
                allRestorants: payload,
                restorants: payload
            }
        case GET_FILTERED:
            return {
                ...state,
                restorants: payload
            }
        case GET_AMOUNTPAGES:
            return {
                ...state,
                AmountPage:payload
            }
        default:
            return { ...state };
    };
};

export default rootReducer;