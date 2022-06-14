import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import movieReducer from './movieSlice'
import userReducer from './userSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		movie: movieReducer,
		user: userReducer,
	}
})

export default store