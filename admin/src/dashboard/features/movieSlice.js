import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../api/network'
import { useSelector } from 'react-redux'



const initialState = {
	movie: [],
	isLoading: false,
	isSuccess: false,
	isError: false
}

// get movies
export const getMovies = createAsyncThunk("movie/getMovies", async(user) => {
	try{
		const res = await url.get('/movies',{
			headers: {
				Authorization: `Bearer ${user.accessToken}`
			}
		})

		return res.data
	} catch (err) {
		console.log(err)
	}
})

// delete movie
export const deleteMovie = createAsyncThunk("movie/deleteMovie", async(id) => {
	try{
		await url.delete('/movies/'+id,{
			headers: {
				Authorization: `Bearer ${user.accessToken}`
			}
		})

		return res.data 
	} catch (err) {
		console.log(err)
	}
})

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isSuccess = false
			state.isError = false
		}
	},
	extraReducers: (builder) => {
		builder
		  .addCase(getMovies.pending, (state) => {
		  	state.isLoading = true
		  })
		  .addCase(getMovies.fulfilled, (state, {payload}) => {
		  	state.isLoading = false
		  	state.isSuccess = true
		  	state.movie = payload
		  })
		  .addCase(getMovies.rejected, (state) => {
		  	state.isLoading = false
		  	state.isError = true
		  })
		  .addCase(deleteMovie.pending, (state) => {
		  	state.isLoading = true
		  	state.isError = false
		  })
		  .addCase(deleteMovie.fulfilled, (state, {payload}) => {		  	
		  	state.isLoading = false
		  	state.isError = false
		  	state.movie = state.movie.filter(item => item._id !== payload.id)
		  })
		  .addCase(deleteMovie.rejected, (state) => {
		  	state.isLoading = false
		  	state.isError = true
		  })
	}
})

export const { reset } = movieSlice.actions
export default movieSlice.reducer
	