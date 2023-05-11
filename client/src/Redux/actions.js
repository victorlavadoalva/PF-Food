import { GET_ALL_RESTORANTS } from './actionsTypes';
import axios from 'axios';

export const getRestorants = (page = 1) => {
    return async function (dispatch) {
        const response = await axios(`https://pf-backend-production-5a61.up.railway.app/restaurants?page=${page}`)
        const data = response.data;
        console.log();
        return dispatch({
            type: GET_ALL_RESTORANTS,
            payload: data[page-1].documents,
        })
    }
};
