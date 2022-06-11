import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../api/network'

const initialState = {
	random: [],
	list: [],
	movie: []
}

// getRandom featured movie
export const fetchRandom = createAsyncThunk('movie/fetchRandom', async(type) => {
  try{
    const res = await url.get(`movies/random?type=${type}`,{
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWM0OGIyY2I0ZjdiOGY5YjVmYjdiYSIsImlhdCI6MTY1NDc2MDI0MSwiZXhwIjoxNjU1MDE5NDQxfQ.x9lMNB7AGe2K-EDtk7zsHJLQRBYV8G960vo59qBwNyE'
        },
    })
    return res.data[0]
    } catch (err) {
    	console.log(err)
    }	
})

// getRandomList movie
export const fetchRandomList = createAsyncThunk('movie/fetchRandomList', async({type, genre}) => {	
  try {
    const response = await url.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWM0OGIyY2I0ZjdiOGY5YjVmYjdiYSIsImlhdCI6MTY1NDc2MDI0MSwiZXhwIjoxNjU1MDE5NDQxfQ.x9lMNB7AGe2K-EDtk7zsHJLQRBYV8G960vo59qBwNyE'
            },
        })
        return response.data
        console.log(response)
    } catch (err) {
        console.log(err)
    }
})

// fetch movie
export const fetchMovie = createAsyncThunk('movie/fetchMovie', async(item) => {
  try{
	const response = await url.get(`movies/find/`+item,{
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWM0OGIyY2I0ZjdiOGY5YjVmYjdiYSIsImlhdCI6MTY1NDc2MDI0MSwiZXhwIjoxNjU1MDE5NDQxfQ.x9lMNB7AGe2K-EDtk7zsHJLQRBYV8G960vo59qBwNyE'
        },
    })
	return response.data
	} catch(err) {
		console.log(err)
	}
})

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder
		  .addCase(fetchRandom.fulfilled, (state, {payload}) => {
		  	state.random = payload
		  })
		  .addCase(fetchRandomList.fulfilled, (state, {payload}) => {
		  	state.list = payload
		  })
		  .addCase(fetchMovie.fulfilled, (state, {payload}) => {
		  	state.movie = payload
		  })
	}

})

export const getRandom = (state) => state.movies.random
export const getRandomList = (state) => state.movies.list
export const getMovie = (state) => state.movies.movie
export default movieSlice.reducer