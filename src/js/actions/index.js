import {SET_DATA_POINTS} from "../constants/action-types";

export function setDataPoints(data) {
    return {type: SET_DATA_POINTS, payload: data};
}