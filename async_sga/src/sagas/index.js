import { takeEvery, put } from 'redux-saga/effects'
import { INCREMENT_ASYNC, INCREMENT, PHOTOS_ASYNC, PHOTOS } from '../constans/counter'
import { delay } from 'redux-saga'
import axios from 'axios'

function* incrementAsync() {
    yield delay(1000)
    yield put({type :INCREMENT})
}

function* photosAsync() {
    try{
        const response = yield axios.get('http://jsonplaceholder.typicode.com/photos')
        yield put({type :PHOTOS, response})
    }catch{
        console.log('error')
    }
}

axios.post('/h5/cardMsg/index', 'orderId:198')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

export function* helloSaga(){
    
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
    yield takeEvery(PHOTOS_ASYNC, photosAsync)
}
