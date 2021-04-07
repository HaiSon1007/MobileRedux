import * as types from './types';

export const requestLogin = (username, password) => {
    return {
        type: types.REQUEST_USER_LOGIN,
        username,
        password
    }
}