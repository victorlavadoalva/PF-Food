import axios from 'axios';
import {
    ERROR,
    GET_ADMIN_USER,
    GET_ALL_RESTORANTS,
    GET_AMOUNTPAGES,
    GET_RESTOURANT_ID,
    POST_USER
} from './actionsTypes';

const URL = "https://pf-backend-production-5a61.up.railway.app/restaurants/"
const POST_URL ="https://pf-backend-production-5a61.up.railway.app/users"

export const getRestorants = ({page = 1, order , rating, name, country}) => {
    return async function (dispatch) {
        try {
           const {data} = await axios(URL,{
                params: {page, order,rating , name, country },
            })
            return dispatch({ type: GET_ALL_RESTORANTS, payload: data[0] }),
                dispatch({ type: GET_AMOUNTPAGES, payload: data[0].totalPages })
        } catch (error) {
            return dispatch({ type: ERROR, payload:[{error},{errorGetRestorant:"ErrorGetRestorant"}]})
        }
    }
};

export const PostUser = (User) => {
    return async function(dispatch){
        try {
            const {data} = await axios.post(POST_URL, User )
            return dispatch({type:POST_USER, payload:data})
        } catch (error) {
            return dispatch({ type: ERROR, payload:[{error},{errorPost:"ErrorPostUser"}]})
        }
    }
}


export const GetAdminUser = () => {
    return async function(dispatch){
        try {
            const {data} = await axios.get()
            const admin = data.filter((e) => e.admin === true);
            return dispatch({type:GET_ADMIN_USER, payload:admin})
        } catch (error) {
            return dispatch({type:ERROR,payload:error})
        }
    }
}

export const getRestorantsID = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios(URL + id)
            const data = response.data;
            return dispatch({ type: GET_RESTOURANT_ID, payload: data })
        } catch (error) {
            return dispatch({ type: ERROR, payload: error })
        }

    }
};