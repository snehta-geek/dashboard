import { SET_IMAGE } from "../constants/actionType";

const initial_state = {
    loading: false,
    image: '',
   
}

const imageReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_IMAGE:
            console.log(" action.payload-", action.payload)
            return {
                ...state,
                loading: true,
                image: action.payload
            }
            default:
                return { ...state }
        }
    };
    export default imageReducer