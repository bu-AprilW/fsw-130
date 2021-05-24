const redux = require("redux")
const {combineReducers, createStore} = redux
const {tvShowReducer} = require("./tvshows")
const {movieReducer} = require("./movies")


const rootReducer = combineReducers({
    show: tvShowReducer,
    movie: movieReducer
})

const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store