const User = require('../models/User')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

// update user
const updateUser = asyncHandler( async(req, res) => {
	if(req.user.id === req.params.id || req.user.isAdmin) {
		if(req.body.password) {
			const salt = await bcrypt.genSalt(10)
			const hashedPassword = await bcrypt.hash(req.body.password, salt)
			req.body.password = hashedPassword
		}

		
		const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},
			{new: true})

		res.status(200).json(updatedUser)		
	} else {
		res.status(403).json("you can update only your account")
	}
})

// delete user
const deleteUser = async(req, res) => {
	if(req.user.id === req.params.id || req.user.isAdmin) {
		
		try {
			await User.findByIdAndRemove(req.params.id)

			res.status(200).json("User deleted successfully!")
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(403).json("you can delete only your account")
	}
}

// get user
const getUser = async(req, res) => {
		try {
			const user = await User.findById(req.params.id)

			const { password, ...info } = user._doc
			res.status(200).json(info)
		} catch (err) {
			res.status(500).json(err)
		}
}

// get users
const getUsers = async(req, res) => {
	const query = req.query.new
	if(req.user.isAdmin) {		
		try {
			const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()

			res.status(200).json(users)
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(403).json("you are not admin")
	}
}

// user stats
const getStats = async(req, res) => {
	const today = new Date()
	const lastYear = today.setFullYear(today.setFullYear() - 1 )

	const months = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	]

	try {
		const stat = await User.aggregate([
			{
				$project: {
					month: { $month: "$createdAt" }
				}
			}, {
				$group: {
					_id: "$month",
					total: { $sum: 1 }
				}
			}
		])

		res.status(200).json(stat)
	} catch (err) {
		res.status(500).json(err)	
	}
}

module.exports = { updateUser, deleteUser, getUser, getUsers, getStats }