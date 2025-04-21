import { SET_USER_INFO } from "./types";

export const setUser = (payload) => {
    return {
        type: SET_USER_INFO,
        payload,
    }
}