import { combineReducers } from 'redux'
import xmlReducer from './xmlReducer'
import appReducer from './appReducer'

const todoApp = combineReducers({
    xml_form: xmlReducer,
    appReducer
})

export default todoApp