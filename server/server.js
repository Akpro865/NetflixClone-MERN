const express = require('express')
const app = express()
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

connectDB()

app.listen(process.env.PORT, () => {
	console.log('app connected successfully')
})