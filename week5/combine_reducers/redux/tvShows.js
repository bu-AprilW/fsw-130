const getTvShow = () => {
    return {
        type: "GET_TVSHOW"
    }
}

const addTvShow = show => {
    return {
        type: "ADD_TVSHOW",
        payload: show
    }
}

const deleteTvShow = show => {
    return {
        type: "DELETE_TVSHOW",
        payload: title
    }
}



const initialState = ["Rick and Morty", "Archer", "Family Guy"]

const tvShowReducer = (tvShows = initialState, action) => {
    switch(action.type) {
        case "ADD_TVSHOW": {
            return [...tvShows, action.payload]
        }
        case "DELETE_TVSHOW": {
            return tvShows.filter(tvShow => tvShow !== action.payload)
        }
        case "GET_SHOWS": {
            return tvShows
        }
        default:
            return tvShows
    }
}

module.exports = {getTvShow, addTvShow, deleteTvShow, tvShowReducer}