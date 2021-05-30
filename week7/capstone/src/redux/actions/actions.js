export function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}
export function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

export function addShow(show) {
    return {
        type: "ADD_SHOW",
        payload: show
    }
}
export function removeShow(show) {
    return {
        type: "REMOVE_SHOW",
        payload: show
    }
}