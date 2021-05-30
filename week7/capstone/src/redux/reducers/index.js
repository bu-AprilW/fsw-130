import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import showReducer from './showReducer'


const reducers = combineReducers({
    movie: movieReducer,
    show: showReducer
})

export default reducers