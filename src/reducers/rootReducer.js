import { combineReducers } from 'redux'
import xmlReducer from './xmlReducer'

const todoApp = combineReducers({
    xml_form: xmlReducer
})

export default todoApp