const User = require('../models/User')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// authentication token
const verify = asyncHandler( async(req, res, next) => {
	let token

	if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		try{
		// get token from header
		token = req.headers.authorization.split(" ")[1]

		// verify token
		const decoded = jwt.verify(token, process.env.SECRET_KEY)

		// get user from token
		req.user = await User.findById(decoded.id)
		next()
		
	} catch(err) {
		res.status(401).json("Not authorized")
	}
}

	if(!token) {
		res.status(401).json("not authorized, no token")
	}
})

module.exports = { verify }