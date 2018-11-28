import { INCREMENT_ASYNC, DECREMENT_ASYNC } from '../constants/counter'

export const increment_Async = () => {
    return {
        type : INCREMENT_ASYNC
    }
}

export const decrement_Async = () => {
    return {
        type : DECREMENT_ASYNC
    }
}