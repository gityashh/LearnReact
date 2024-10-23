import { useDispatch, useSelector } from 'react-redux';
import { asyncIncrement, decrement, increment } from './store/counterActions/counterAction';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  const increHandler = () => {
    dispatch(increment());
  }
  const decreHandler = () => {
    dispatch(decrement());
  }
  return (
    <div>
      counter:{count}
      <button onClick={increHandler}>Increment by 1</button>
      <button onClick={decreHandler}>Decrement by 1</button>
      <button onClick={() => dispatch(asyncIncrement())}>Async Increment</button>
    </div>
  )
}

export default App