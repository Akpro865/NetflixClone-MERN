import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../api/network'

const initialState = {
	users: [],
	isLoading: false,
	isSuccess: false,
	isError: false
}

// get users
export const getUsers = createAsyncThunk("user/getUsers", async(user) => {
	try{
		const res = await url.get('/users/?new=true',{
			headers: {
				Authorization: `Bearer ${user.accessToken}`
			}
		})

		return res.data
	} catch (err) {
		console.log(err)
	}
})

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		reset: (state) => {
			state.users = null
			state.isLoading = false
			state.isSuccess = false
			state.isError = false
		}
	},
	extraReducers: (builder) => {
		builder
		  .addCase(getUsers.pending, (state) => {
		  	state.isLoading = true
		  })
		  .addCase(getUsers.fulfilled, (state, {payload}) => {
		  	state.isLoading = false
		  	state.isSuccess = true
		  	state.users = payload
		  })
		  .addCase(getUsers.rejected, (state) => {
		  	state.isLoading = false
		  	state.isError = true
		  	state.users = null
		  })
	}
})

export const { reset } = userSlice.actions
export default userSlice.reducer