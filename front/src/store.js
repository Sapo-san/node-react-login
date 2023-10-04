import { configureStore } from '@reduxjs/toolkit'
import credentialsSlice from './slices/credentialsSlice'

export const store = configureStore({
  reducer: {
    credentials: credentialsSlice
  },
})