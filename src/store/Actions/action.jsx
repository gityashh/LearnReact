export { increment, decrement } from "../Slices/counterSlice"
export { login, logout } from "../Slices/authSlice"
export { addTodo, removeTodo, toggleTodo } from "../Slices/todoSlice"
import { incrementByAmount } from "../Slices/counterSlice"
export const asyncIncrement = () => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(2))
    }, 1200)
}
