import { all } from 'redux-saga/effects'
import { counterSaga } from './counter'
import { getUserSaga } from './user'

export default function* rootSaga() {
    yield all([
        ...counterSaga,
        ...getUserSaga
    ])
}