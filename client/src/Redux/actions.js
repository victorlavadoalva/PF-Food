import axios from 'axios';
import { ERROR, GET_ALL_RESTORANTS, GET_AMOUNTPAGES, GET_RESTOURANT_ID } from './actionsTypes';

const URL = "https://pf-backend-production-5a61.up.railway.app/restaurants/"

export const getRestorants = (page = 1, order , rating, name, country ) => {
    return async function (dispatch) {
        try {
           const {data} = await axios(URL,{
                params: {page, order,rating , name, country },
            })
            return dispatch({ type: GET_ALL_RESTORANTS, payload: data[0].documents }),
                dispatch({ type: GET_AMOUNTPAGES, payload: data[0].totalPages })
        } catch (error) {
            return dispatch({ type: ERROR, payload: error })
        }
    }
};


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