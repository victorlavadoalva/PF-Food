import {
    CREATED_RESTORANTS,
    GET_ALL_RESTORANTS,
    GET_FILTERED
} from "./actionsTypes";

const initialState = {
    restorants: [],
    allRestorants: [],
    createdRestorants: [],
}

const rootReducer = (state = initialState, {type, payload}) =>{
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
        case CREATED_RESTORANTS:
            return {
                ...state,
                createdRestorants: payload
            }
        default:
            return {...state};
    };
};

export default rootReducer;