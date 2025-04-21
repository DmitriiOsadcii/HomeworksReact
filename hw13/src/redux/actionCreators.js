import { SET_FILTER, SET_USERS } from "./types";

export const onSetUser = (users) => {
    return {
        type: SET_USERS,
        payload: users,
    }
};

export const onSetFilter = (text) => {
    return {
        type: SET_FILTER,
        payload: text,

    }
}
