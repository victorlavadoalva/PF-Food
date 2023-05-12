import axios from 'axios';
import { GET_ALL_RESTORANTS } from './actionsTypes';

export const getRestorants = (page ) => {
    
    return async function (dispatch) {
        const response = await axios(`https://pf-backend-production-5a61.up.railway.app/restaurants?page=${page}`)
        const data = response.data;
        return dispatch({
            type: GET_ALL_RESTORANTS,
            payload:data,
        })
    }
};
