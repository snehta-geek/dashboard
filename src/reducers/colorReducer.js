import {SET_PRI_COLOR, SET_SEC_COLOR } from "../constants/actionType";


const initial_state = {
    loading: false,
    priColor: '',
    secColor: ''
}

const colorReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_PRI_COLOR:
            console.log(" action.payload-", action.payload)
            return {
                ...state,
                loading: true,
                priColor: action.payload
            }
        case SET_SEC_COLOR:
            // console.log(" action.payload-", action.payload)
            return {
                ...state,
                loading: true,
                secColor: action.payload
            }
        default:
            return { ...state }
    }
};

export default colorReducer