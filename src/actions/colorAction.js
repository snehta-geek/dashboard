import { SET_PRI_COLOR, SET_SEC_COLOR } from "../constants/actionType"


export const priColorAction = (payload) => {
    return {
     type: SET_PRI_COLOR, 
     payload 
    }
}
export const secColorAction = (payload) => {
    return {
     type: SET_SEC_COLOR, 
     payload 
    }
}

