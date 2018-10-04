import { takeEvery, put } from 'redux-saga/effects'
import { INCREMENT_ASYNC, INCREMENT, PHOTOS_ASYNC, PHOTOS } from '../constans/counter'
import { delay } from 'redux-saga'
import axios from 'axios'

function* incrementAsync() {
    yield delay(1000)
    yield put({type :INCREMENT})
}

function* photosAsync() {
    const response = yield axios.get('http://jsonplaceholder.typicode.com/photos')
    console.log(response)
    yield put({type :PHOTOS, response})
}

export function* helloSaga(){
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
    yield takeEvery(PHOTOS_ASYNC, photosAsync)
}

