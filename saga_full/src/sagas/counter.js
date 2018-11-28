import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects'
import { INCREMENT_ASYNC, DECREMENT_ASYNC, INCREMENT, DECREMENT} from '../constants/counter'

function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: INCREMENT })
}

function* decrementAsync() {
    yield call(delay, 1000)
    yield put({ type: DECREMENT })
}

function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

function* watchDecrementAsync() {
    yield takeEvery(DECREMENT_ASYNC, decrementAsync)
}

export const counterSaga = [
    watchIncrementAsync(),
    watchDecrementAsync()
]