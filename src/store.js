import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './state/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})