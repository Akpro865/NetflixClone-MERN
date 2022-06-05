const express = require('express')
const router = express.Router()
const { updateUser, deleteUser, getUser, getUsers, getStats } = require('../controllers/user')
const { verify } = require('../middlewares/auth')

router.route("/:id").patch(verify, updateUser).delete(verify, deleteUser)
router.get("/find/:id", getUser)
router.get("/", verify, getUsers)
router.get("/stats", verify, getStats)

module.exports = router