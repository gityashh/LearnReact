export { increment, decrement } from "../counterSlice/counterSlice"

import { incrementByAmount } from "../counterSlice/counterSlice"

export const asyncIncrement = () => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(2))
    }, 1200)
}
