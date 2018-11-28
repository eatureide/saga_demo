import { combineReducers } from 'redux'
import counter from '../reducers/counter'
import user from '../reducers/user'

export default combineReducers({
    counter,
    user
})