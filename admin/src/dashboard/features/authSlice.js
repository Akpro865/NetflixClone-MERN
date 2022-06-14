import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../api/network'

// get user
export const localUser = JSON.parse(localStorage.getItem('user'))

const initialState = {
	user: localUser || null,
	isLoading: false,
	isSuccess: false,
	isError: false
}

// login user
export const login = createAsyncThunk("auth/login", async(userData) => {
	try{
		const res = await url.post('/auth/login', userData)

		if(res) {
			localStorage.setItem('user', JSON.stringify(res.data))
		}
	
		return res.data
	} catch (err) {
		console.log(err)
	}
})

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.user = null
			state.isLoading = false
			state.isSuccess = false
			state.isError = false
		}
	},
	extraReducers: (builder) => {
		builder
		  .addCase(login.pending, (state) => {
		  	state.isLoading = true
		  })
		  .addCase(login.fulfilled, (state, {payload}) => {
		  	state.isLoading = false
		  	state.isSuccess = true
		  	state.user = payload
		  })
		  .addCase(login.rejected, (state) => {
		  	state.isLoading = false
		  	state.isError = true
		  	state.user = null
		  })
	}
})

export const { reset } = authSlice.actions
export const { user } = (state) => state.auth
export default authSlice.reducer
console.log(user)