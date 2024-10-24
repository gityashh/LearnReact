export { increment, decrement } from "../Slices/counterSlice"

import { incrementByAmount } from "../Slices/counterSlice"

export const asyncIncrement = () => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(2))
    }, 1200)
}
