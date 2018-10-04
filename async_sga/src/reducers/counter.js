import { INCREMENT, PHOTOS } from '../constans/counter'
const counter = (state = 1, action = {}) => {
    switch(action.type){
        case INCREMENT :
            return state +1
        case PHOTOS:
            return state +1
        default :
            return state
    }
}

export default counter