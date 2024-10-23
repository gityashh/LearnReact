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
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-4 bg-zinc-900 text-white rounded w-80 px-12 py-4'>
      <h1 className='font-thin text-2xl bg-zinc-700 px-12 py-6 rounded'>counter:{count}</h1>
      <div className='flex gap-4'>
      <button className='bg-zinc-500 px-4 py-2 rounded text-xs font-semibold' onClick={increHandler}>Increment by 1</button>
      <button className='bg-zinc-500 px-4 py-2 rounded text-xs font-semibold' onClick={decreHandler}>Decrement by 1</button>
      <button className='bg-zinc-500 px-4 py-2 rounded text-xs font-semibold' onClick={() => dispatch(asyncIncrement())}>Async Increment</button>
      </div>
    </div>
    </div>
  )
}

export default App