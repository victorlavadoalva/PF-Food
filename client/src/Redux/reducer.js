import {
    ERROR,
    GET_ADMIN_USER,
    GET_ALL_RESTORANTS,
    GET_AMOUNTPAGES,
    GET_FILTERED,
    GET_RESTOURANT_ID,
    GET_USER_EMAIL,
    LOADING,
    LOGIN,
    POST_USER
} from "./actionsTypes";

const initialState = {
    restorants: {},
    allRestorants: [],
    RestaurantID:[],
    AmountPage:"",
    Admin:[],
    postuser:[],
    userFoundByEmail:[],
    login:[],
    loading:false,
    error:[],
    plates: [],
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
        case POST_USER:
            return {
                ...state,
                postuser:payload
            }
        case GET_USER_EMAIL:
                return{
                ...state,
                userFoundByEmail:payload
            }
        case LOADING:
            return {
                ...state,
                loading:payload
            }
        case LOGIN:
            return{
                ...state,
                login:payload
            }
        case GET_RESTOURANT_ID:
            return{
                ...state,
                RestaurantID: payload
            }
        case GET_AMOUNTPAGES:
            return {
                ...state,
                AmountPage:payload
            }
        case GET_ADMIN_USER:
            return {
                ...state,
                Admin:payload
            }
        case ERROR:
            return{
                ...state,
                error:payload
            }
        default:
            return { ...state };
    };
};

export default rootReducer;