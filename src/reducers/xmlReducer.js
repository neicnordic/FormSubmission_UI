import {
    XML_SCHEMA_ACTIONS
} from '../actions/XML_validator'


const initialState = {
    xml_schema: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case XML_SCHEMA_ACTIONS.SET_XML_SCHEMA:
            return {
                ...state,
                xml_schema: action.schema
            }
        default:
            return state;
    }
}