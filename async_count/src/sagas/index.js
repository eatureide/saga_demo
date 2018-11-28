import { delay } from 'redux-saga'
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'
import { INCREMENT_ASYNC } from '../constants/counter'

function* incrementAsync() {
    yield call(delay,2000)
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}