const getMovie = () => {
    return {
        type: "GET_MOVIE",
    }
}


const addMovie = movie => {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

const deleteMovie = movie => {
    return {
        type: "DELETE_MOVIE",
        payload: movie
    }
}


const initialState = ["The Notebook", "Friday", "Magic Mike"];

const movieReducer = (movies = initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIE": {
            return [...movies, action.payload]
        }
        case "DELETE_MOVIE": {
            return movies.filter(movie => movie !== action.payload)
        }
        case "GET_MOVIE": {
            return movies
        }
        default:
            return movies
    }
}

module.exports = {getMovie, addMovie, deleteMovie, movieReducer}