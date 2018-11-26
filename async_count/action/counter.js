import { INCREMENT, INCREMENT_ASYNC } from '../constants/counter'

export const increment = () => {
    return {
        type : INCREMENT
    }
}

export const increment_Async = () => {
    return {
        type : INCREMENT_ASYNC
    }
}