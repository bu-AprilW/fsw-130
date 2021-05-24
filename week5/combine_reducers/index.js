const store = require("./redux/store")
const {addMovie, deleteMovie, getMovie} = require("./redux/movies")
const {addTvShow, deleteTvShow, getTvShow} = require("./redux/tvShows")


store.dispatch(getMovie())