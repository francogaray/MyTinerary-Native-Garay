import { combineReducers } from "redux";

import citiesReducer from './citiesReducer'
import itinerarysReducer from'./itinerarysReducers'
import userReducer from './userReducer'


const mainReducer = combineReducers({
    citiesReducer,
    itinerarysReducer,
    userReducer
})

export default mainReducer