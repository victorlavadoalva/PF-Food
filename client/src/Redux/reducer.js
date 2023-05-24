import {
    ERROR,
    GET_ADMIN_USER,
    GET_ALL_RESTORANTS,
    GET_AMOUNTPAGES,
    GET_FILTERED,
    GET_RESTOURANT_ID,
    GET_TOKEN,
    GET_USER_EMAIL,
    GET_DISH,
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
    loadingApp:false,
    tokenLogin:[],
    postuser:[],
    userFoundByEmail:[],
    error:[],
    plates: [],
    dishes:[]
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
            return{
                ...state,
                loadingApp:payload
            }
        case GET_TOKEN:
            return {
                ...state,
                tokenLogin:payload
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
        case GET_DISH:
            return{
                ...state,
                dishes: payload
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