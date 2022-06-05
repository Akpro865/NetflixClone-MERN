const User = require('../models/User')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

// register user
const register = asyncHandler( async(req, res) => {
	const { username, email, password } = req.body

	if(!username || !email || !password) {
		res.status(400).json("please add all fields")
	}

	// check user exists
	const userExists = await User.findOne({email})

	if(userExists) {
		res.status(400).json("user already exists")
	}

	// hashing password
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	//create user
	
		const user = await User.create({
		username,
		email,
		password: hashedPassword
	})
	
	if(user) {
		res.status(201).json(user)
	}	
})

// login user
const login = asyncHandler( async(req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({email})

	// jwt token
	const accessToken = jwt.sign({id: user._id, isAdmin: User.isAdmin},
	process.env.SECRET_KEY,
	{expiresIn: "3d"})

	if(user && await(bcrypt.compare(password, user.password))) {
		res.status(200).json({user, accessToken})
	} else {
		res.status(404).json("Invalid credentials")
	}	
})

module.exports = { register, login }