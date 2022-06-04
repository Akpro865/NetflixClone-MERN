const User = require('../models/User')
const bcrypt = require('bcryptjs')

// register user
const register = async(req, res) => {
	const { username, email, password } = req.body

	// hashing password
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	try{
		const user = await User.create({
		username,
		email,
		password: hashedPassword
	})
	
	if(user) {
		res.status(500).json("user already exists")
	}		
	res.status(201).json(user)
    } catch (err) {
    	res.status(500).json(err)
    }	
}

// login user
const login = async(req, res) => {
	const { email, password } = req.body
	
	try {
		const user = await User.findOne({email})

		if(user && await(bcrypt.compare(password, user.password))) {
			res.status(200).json(user)
		} else {
			res.status(404).json("Invalid password")
		}
		
    } catch (err) {
    	res.status(404).json(err)
    }	
}

module.exports = { register, login }