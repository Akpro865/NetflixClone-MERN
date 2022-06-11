const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

connectDB()

app.use(express.json())

app.use(cors())

app.use("/api/auth", require('./routes/auth'))
app.use("/api/users", require('./routes/users'))
app.use("/api/movies", require('./routes/movies'))
app.use("/api/lists", require('./routes/lists'))

app.listen(process.env.PORT, () => {
	console.log('app connected successfully')
})