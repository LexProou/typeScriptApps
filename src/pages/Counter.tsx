import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { increment, decrement, incrementByAmount } from '../redux/counterSlice'


function Counter() {

  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.counter.value)

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 to-purple-600'>
       <div className='bg-white shadow-lg rounded-3xl p-16'>
        <h1 className='text-3x1 font-bold text-center text-gray-800 mb-6'>REACT COUNTER</h1>


      <button className='mr-2 px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={() => dispatch(increment())}>INC</button>
      <button  className='mr-2 px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500' onClick={() => dispatch(decrement())}>DEC</button>
      <button className='mr-2 px-4 py-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500' onClick={() => dispatch(incrementByAmount(2))}>INC BY 2</button>
      <br/>
      <h1 className='text-5x1 font-bold text-center text-gray-800 mt-7'>{counter}</h1>
    </div>
    </div>
  )
}

export default Counter
