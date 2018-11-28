import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_USER_REQUEST, FETCH_USER_SUCCEEDED, FETCH_USER_FAILURE } from '../constants/user'

function* fetchUser() {
    try {
        const user = yield call(axios.get, 'http://jsonplaceholder.typicode.com/users')
        yield put( {type: FETCH_USER_SUCCEEDED, user: user})
    } catch( error ){
        yield put( {type: FETCH_USER_FAILURE, error: error.message})
    }
}

function* watchFetchUser() {
    yield takeEvery(FETCH_USER_REQUEST, fetchUser)
}

export const getUserSaga = [
    watchFetchUser()
]