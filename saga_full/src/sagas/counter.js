import { delay } from 'redux-saga'
import { takeEvery, put, call } from 'redux-saga/effects'
import { INCREMENT_ASYNC } from '../constants/counter'

function* incrementAsync() {
    yield call(delay,2000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}


export const counterSaga = [
    watchIncrementAsync()
]