import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice'
import todoSlice from '../redux/todoSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch