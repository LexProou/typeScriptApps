import { useState } from 'react'

import '../index.css'
import '../output.css'

type TodoType = {
  id: number
  text: string
  completed: boolean
}


function Todo() {

  const [todos, setTodos] = useState<TodoType[]>([])
  const [input, setInput] = useState('') 

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }


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
            onClick={addTodo} 
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
                onChange={() => setTodos(todos.map((t) => t.id === todo.id ? {...t, completed: !t.completed} : t))} 
                className='mr-2 h-5 w-5 text-purple-600 bg-gray-100 border-gray-300 rounded' />
              <span 
                className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{todo.text}</span>

                <button 
                  onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))} 
                  className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'>Delete</button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  )
}

export default Todo
