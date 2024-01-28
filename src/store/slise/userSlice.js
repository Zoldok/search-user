import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  userNameInput: '',
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    findUser(state, action) {
      state.users = action.payload
    },
    updateUserNameInput(state, action) {
      state.userNameInput = action.payload
    },
  },
})

export const { findUser, updateUserNameInput } = userSlice.actions

export default userSlice.reducer
