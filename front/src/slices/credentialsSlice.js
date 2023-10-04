import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const SESSION_KEY = import.meta.env.VITE_SESSION_KEY

const initialState = {
  cookie: Cookies.get(SESSION_KEY)
}
export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.cookie = action.payload
    },
    removeCredentials: (state) => {
      state.cookie = null
      Cookies.remove(SESSION_KEY)
    },
  },
})

export const { setCredentials, removeCredentials } = credentialsSlice.actions

export default credentialsSlice.reducer