import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddlewaire from 'redux-saga'
import rootSaga from './sagas'

const sgaaMiddleware = createSagaMiddlewaire()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sgaaMiddleware))
)

sgaaMiddleware.run(rootSaga)

ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider>,
document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
