import delay from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import { INCREMENT_ASYNC } from '../constants/counter';
import axios from 'axios'

// const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms))

function* incrementAsync(){
    yield axios.get('http://jsonplaceholder.typicode.com/photos').then(responseJson => responseJson)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync(){
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}