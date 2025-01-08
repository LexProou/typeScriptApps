import { useState } from 'react'
import { addTodo, removeTodo, toggleTodo } from '../redux/todoSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

import '../index.css'
import '../output.css'

export type TodoType = {
  id: number
  text: string
  completed: boolean
  todos: TodoType[]
}



const Todo: React.FC = () => {

  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todo.todos)
  const [input, setInput] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 to-purple-600">
      <div className='bg-white shadow-lg rounded-3xl p-16'>
        <h1 className='text-3x1 font-bold text-center text-gray-800 mb-6'>REACT TODO LIST</h1>

        <div className='mb-4 flex'>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            type='text' 
            placeholder='Add a new todo' 
            className='flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          <button 
            onClick={() => dispatch(addTodo({id: Date.now(), text: input, completed: false}))} 
            className='px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Add</button>
        </div>

        <ul className='space-y-2'>
          {todos.map((todo) => (
            <li 
                key={todo.id} 
                className='flex items-center bg-blue-100 p-2 rounded'>
              <input 
                type='checkbox'
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))} 
                className='mr-2 h-5 w-5 text-purple-600 bg-gray-100 border-gray-300 rounded' />
              <span 
                className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{todo.text}</span>

                <button 
                  onClick={() => dispatch(removeTodo(todo.id))} 
                  className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'>Delete</button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  )
}

export default Todo
