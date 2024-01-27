import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slise/userSlice'
import { Api } from './service/Service'

export default configureStore({
  reducer: {
    users: userReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(Api.middleware),
})
