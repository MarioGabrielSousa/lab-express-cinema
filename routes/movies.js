const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie-model");

router.get("/movies", async (req, res) => {
  try {
    const moviesFromDB = await Movie.find();
    res.render("movies", { moviesFromDB });
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.get("/movies/:movieId", async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await Movie.findById(movieId);
    res.render("movie-details", { movie });
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

module.exports = router;
