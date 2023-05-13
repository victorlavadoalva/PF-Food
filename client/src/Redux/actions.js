import axios from 'axios';
import { ERROR, GET_ALL_RESTORANTS, GET_AMOUNTPAGES } from './actionsTypes';

export const getRestorants = (page=1) => {
    
    return async function (dispatch) {
        try {
            const response = await axios(`https://pf-backend-production-5a61.up.railway.app/restaurants?page=${page}`)
        const data = response.data;
        
        
        return dispatch({type: GET_ALL_RESTORANTS,payload:data[0].documents}),
            dispatch({type:GET_AMOUNTPAGES,payload:data[0].totalPages})
        } catch (error) {
            return dispatch({type: ERROR,payload:error})
        }
        
    }
};
