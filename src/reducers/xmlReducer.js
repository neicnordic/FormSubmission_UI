import {
    XML_SCHEMA_ACTIONS
} from '../actions/XML_validator'


const initialState = {
    xml_schema: null,
    schema_type: null,
    form_schema: null,
    valid_form_schema: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case XML_SCHEMA_ACTIONS.SET_XML_SCHEMA:
            return {
                ...state,
                xml_schema: action.schema,
            }
        case XML_SCHEMA_ACTIONS.SET_SCHEMA_TYPE:
            return {
                ...state,
                schema_type: action.schema_type,
                form_schema: action.schema
            }
        default:
            return state;
    }
}