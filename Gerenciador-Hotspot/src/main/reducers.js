import { combineReducers } from 'redux'
import Reducer from '../dashboard/reducer'

const rootReducer = combineReducers({
    hotspot: Reducer
})

export default rootReducer