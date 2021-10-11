import { SET_IMAGE } from "../constants/actionType"


export const imageAction = (payload) => {
    return {
     type: SET_IMAGE, 
     payload 
    }
}