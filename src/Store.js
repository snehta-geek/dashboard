import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import colorReducer from "./reducers/colorReducer";
import imageReducer from "./reducers/imageReducer";

 
const rootReducer=combineReducers({
    pickColor:colorReducer,
    pickImage:imageReducer
   

})

// const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer);       

export default store;
