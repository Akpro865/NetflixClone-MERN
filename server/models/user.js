const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "" },
  name: { type: Boolean , default: false },
},{
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
