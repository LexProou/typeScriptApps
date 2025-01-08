import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TodoType {
    id: number
    text: string
    completed: boolean
}

export interface TodoState {
    todos: TodoType[]
}

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
    },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer