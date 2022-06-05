const Movie = require('../models/Movie')

// create movie
const createMovie = async(req, res) => {
	try{
		if(req.user.isAdmin) {
			const movie = await Movie.create(req.body)

			res.status(200).json(movie)
		} else {
			res.status(403).json("you are not allowed")
		}
	} catch(err) {
		res.status(500).json(err)
	}
}

// update movie
const updateMovie = async(req, res) => {
	try{
		if(req.user.isAdmin) {
			const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, 
			{new: true})

			res.status(200).json(updatedMovie)
		} else {
			res.status(403).json("you are not allowed")
		}
	} catch(err) {
		res.status(500).json(err)
	}
}

// delete movie
const deleteMovie = async(req, res) => {
	try{
		if(req.user.isAdmin) {
			await Movie.findByIdAndRemove(req.params.id)

			res.status(200).json("movie deleted successfully")
		} else {
			res.status(403).json("you are not allowed")
		}
	} catch(err) {
		res.status(500).json(err)
	}
}

// get movie
const getMovie = async(req, res) => {
	try{
		const movie = await Movie.findById(req.params.id)

		res.status(200).json(movie)
	} catch(err) {
		res.status(500).json(err)
	}
}

// get random
const getRandom = async(req, res) => {
	const type = req.query.type
	let movie;
	try{
		if(type === "series") {
			movie = await Movie.aggregate([
				{ $match: { isSeries: true } },
				{ $sample: { size: 1 } }
			])
		} else {
			movie = await Movie.aggregate([
				{ $match: { isSeries: false } },
				{ $sample: { size: 1 } }
			])
		}

		res.status(200).json(movie)
	} catch(err) {
		res.status(500).json(err)
	}
}

// get all movie
const getMovies = async(req, res) => {
	try{
		if(req.user.isAdmin) {
			const movie = await Movie.find().sort({_id: -1})

			res.status(200).json(movie)
		} else {
			res.status(403).json("you are not allowed")
		}
	} catch(err) {
		res.status(500).json(err)
	}
}

module.exports = { createMovie, updateMovie, deleteMovie,
 getMovie, getRandom, getMovies }