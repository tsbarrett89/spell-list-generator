import { combineReducers } from "redux";

import authReducer from './authReducer'
import characterReducer from './characterReducer'
import spellReducer from './spellReducer'

export default combineReducers({
    authReducer,
    characterReducer,
    spellReducer
})