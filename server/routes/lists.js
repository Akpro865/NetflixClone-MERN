const express = require('express')
const router = express.Router()
const { createList, updateList, deleteList, getList } = require('../controllers/list')
const { verify } = require('../middlewares/auth')

router.route("/:id").patch(verify, updateList).delete(verify, deleteList)
router.post("/", verify, createList)
router.get("/", verify, getList)

module.exports = router