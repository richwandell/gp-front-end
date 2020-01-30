import { combineReducers } from 'redux'
import {SET_DATA_POINTS} from "../constants/action-types";

const initialState = {dataPoints: []};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_DATA_POINTS:
            return Object.assign({}, state, {
                dataPoints: action.payload
            });
    }
    return state;
}

export default combineReducers({rootReducer});