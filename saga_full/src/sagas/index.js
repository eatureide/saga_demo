import { all } from 'redux-saga/effects'

// import { watchIncrementAsync } from './counter'
// import { watchFetchUser, watchFetchTodos } from './user'
// import * as counterSagas from './counter'
// import * as userSagas from './user'

import { counterSaga } from './counter'
import { userSagas } from './user'

export default function* rootSaga(){
    // yield all([
    //     watchIncrementAsync(),
    //     watchFetchUser(),
    //     watchFetchTodos()
    // ])
    // yield all([
    //     ...Object.values(userSagas),
    //     ...Object.values(counterSagas)
    // ].map(fork))
    yield all([
        ...counterSaga,
        ...userSagas
    ])
}