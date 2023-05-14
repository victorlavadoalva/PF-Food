import axios from 'axios';
import { ERROR, GET_ALL_RESTORANTS, GET_AMOUNTPAGES, GET_RESTOURANTID } from './actionsTypes';

export const getRestorants = (page, order , raiting, name, country ) => {
    
    return async function (dispatch) {
        if(!page) page = 1
        
        try {
            console.log(page)
            console.log(raiting)
            const response = await axios(`https://pf-backend-production-5a61.up.railway.app/restaurants`,{
                params: {page, order,raiting , name, country },
            })
        const data = response.data;
        
        
        return dispatch({type: GET_ALL_RESTORANTS,payload:data[0].documents}),
            dispatch({type:GET_AMOUNTPAGES,payload:data[0].totalPages})
        } catch (error) {
            return dispatch({type: ERROR,payload:error})
        }
        
    }
};


export const getRestorantsID = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios(`https://pf-backend-production-5a61.up.railway.app/restaurants/${id}`)
        const data = response.data;
        return dispatch({type: GET_RESTOURANTID,payload:data})
        } catch (error) {
            return dispatch({type: ERROR,payload:error})
        }
        
    }
};