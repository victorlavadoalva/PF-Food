import axios from "axios";
import {
  ERROR,
  GET_ADMIN_USER,
  GET_ALL_RESTORANTS,
  GET_AMOUNTPAGES,
  GET_RESTOURANT_ID,
  GET_USER_EMAIL,
  LOADING,
  LOGIN,
  POST_USER
} from "./actionsTypes";
const token = process.env.GET_TOKEN;
const GET_URL_TOKEN =`https://pf-backend-production-5a61.up.railway.app/${token}`
const URL_RESTAURANT = "https://pf-backend-production-83a4.up.railway.app/restaurants";
const URL_USERS = "https://pf-backend-production-5a61.up.railway.app/users";


export const getRestorants = ({ page = 1, order, rating, name, country }) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(URL_RESTAURANT, {
        params: { page, order, rating, name, country },
      });
      return (
        dispatch({ type: GET_ALL_RESTORANTS, payload: data[0] }),
        dispatch({ type: GET_AMOUNTPAGES, payload: data[0].totalPages })
      );
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorGetRestorant: "ErrorGetRestorant" }],
      });
    }
  };
};

export const GetUserEmail = ({ saveEmail }) => {
  return async function (dispatch) {
    try {
        console.log(saveEmail)
        const response_user = await axios.get(URL_USERS + `?email=${saveEmail}`)
        const response_restaurant = await axios.get(URL_RESTAURANT + `?email=${saveEmail}` )
        const dataUser = response_user.data
        const dataRestaurant = response_restaurant.data
      if (dataUser) {
        return dispatch({ type: GET_USER_EMAIL, payload: [true, dataUser] });
      }else if(dataRestaurant){
        return dispatch({ type: GET_USER_EMAIL, payload: [true, dataRestaurant] });
      }else {
        return dispatch({ type: GET_USER_EMAIL, payload: [false, null] });
      }
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorPost: "ErrorPostUser" }],
      });
    }
  };
};

export const PostUser = (User) => {
  return async function (dispatch) {
    try {
      console.log(User);
      const { data } = await axios.post(URL_USERS, User);
      return dispatch({ type: POST_USER, payload: data });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: [{ error }, { errorPost: "ErrorPostUser" }],
      });
    }
  };
};

export const GetAdminUser = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get();
      const admin = data.filter((e) => e.admin === true);
      return dispatch({ type: GET_ADMIN_USER, payload: admin });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };
};

export const getRestorantsID = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios(URL_RESTAURANT + '/' + id);
      const data = response.data;
      return dispatch({ type: GET_RESTOURANT_ID, payload: data });
    } catch (error) {
      return dispatch({ type: ERROR, payload: error });
    }
  };
};

export const Login = ({isAuthenticated, user}) => {
  return async function (dispatch) {
      return dispatch({ type: LOGIN, payload: [isAuthenticated, user] });
  };
};

export const Loading = (boolean) =>{
return async function(dispatch){
  return dispatch({type:LOADING,payload:boolean})
}
}