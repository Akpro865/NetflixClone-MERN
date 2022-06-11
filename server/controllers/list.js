const List = require('../models/List')

// create List
const createList = async(req, res) => {
	try{
		if(req.user.isAdmin) {
			const list = await List.create(req.body)

			res.status(200).json(list)
		} else {
			res.status(403).json("you are not allowed")
		}
	} catch(err) {
		res.status(500).json(err)
	}
}

const Movie = require('../models/Movie')

// update list
const updateList = async(req, res) => {
	try{
		if(req.user.isAdmin) {
			const updatedList = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, 
			{new: true})

			res.status(200).json(updatedList)
		} else {
			res.status(403).json("you are not allowed")
		}
	} catch(err) {
		res.status(500).json(err)
	}
}

// delete list
const deleteList = async(req, res) => {
	try{
		if(req.user.isAdmin) {
			await Movie.findByIdAndRemove(req.params.id)

			res.status(200).json("list deleted successfully")
		} else {
			res.status(403).json("you are not allowed")
		}
	} catch(err) {
		res.status(500).json(err)
	}
}

// get list
const getList = async(req, res) => {
	const typequery = req.query.type
	const genrequery = req.query.genre
	let list = []
	try{
		if(typequery) {
			if(genrequery) {
				list = await List.aggregate([
				{ $match: { type: typequery, genre: genrequery } },
				{ $sample: { size: 10 }}
			])
			} else {
				list = await List.aggregate([
				{ $match: { type: typequery } },
				{ $sample: { size: 10 }}
			])
			}

			
		} else {
			list = await List.aggregate([
				{ $sample: { size: 10 }}
			])
		}

		res.status(200).json(list)
	} catch(err) {
		res.status(500).json(err)
	}
}

module.exports = { createList, updateList, deleteList, getList }