import { INCREMENT,INCREMENT_ASYNC,PHOTOS_ASYNC } from '../constans/counter'
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