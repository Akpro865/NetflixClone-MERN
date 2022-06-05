const express = require('express')
const router = express.Router()
const { createMovie, updateMovie, deleteMovie,
 getMovie, getRandom, getMovies } = require('../controllers/movie')
const { verify } = require('../middlewares/auth')

router.route("/").post(verify, createMovie).get(verify, getMovies)
router.route("/:id").patch(verify, updateMovie).delete(verify, deleteMovie)
router.get("/find/:id",verify, getMovie)
router.get("/random",verify, getRandom)

module.exports = router