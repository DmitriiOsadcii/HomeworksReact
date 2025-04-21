import { SET_USER_INFO } from "./types";
const initialState = {
    username: 'У вас есть имя?',
    status: 'Заполните поле...',
}

const reducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_INFO:
            return { ...store, username: payload.username, status: payload.status }
        default:
            return store
    }
};

export default reducer;