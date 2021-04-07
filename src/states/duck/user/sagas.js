function* watchRequestUser() {
    yield all([
        takeLatest(REQUEST_USER_LOGIN, requestLoginUser),
    ])
}
export default function* watchSagas() {
    yield all([fork(watchRequestUser)]);
}

function* requestLoginUser() {
    try {
        const user = yield select((state) => state.user)
        console.log("userName", user.username);
        console.log("Password", user.password);
    } catch (error) {
        console.log("error ", error);
    }
}