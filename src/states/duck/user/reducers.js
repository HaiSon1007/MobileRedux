import * as types from './types';
const initialState = {
    username: '',
    password: '',
    check: false,
}
const Action = {
    type: string,
    payload: any,
}
export default (state = initialState, action = Action) => {
    switch (action.type) {
        case types.REQUEST_USER_LOGIN:
            return {
                ...state,
                username: action.username,
                password: action.password,
                check: true
            }
        default:
            break;
    }
}