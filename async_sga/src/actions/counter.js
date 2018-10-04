import { INCREMENT,INCREMENT_ASYNC,PHOTOS_ASYNC,DECREMENT } from '../constans/counter'
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const incrementAsync = () => {
    return {
        type: INCREMENT_ASYNC
    }
}

export const photosAsync = () => {
    return {
        type: PHOTOS_ASYNC
    }
}

export const decrement =() => {
    return {
        type: DECREMENT
    }
}