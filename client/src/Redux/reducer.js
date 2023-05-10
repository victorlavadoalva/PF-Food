import { GET_ALL_RESTORANTS } from "./actionsTypes";
import { FILTER_BY_LOCATION } from "./actionsTypes";
import { ORDER_BY_RATING } from "./actionsTypes";
import { ORDER_BY_NAME  } from "./actionsTypes";


const initialState = {
    restorants: [],
    allRestorants: []
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        default:
            return { ...state }
    }
}