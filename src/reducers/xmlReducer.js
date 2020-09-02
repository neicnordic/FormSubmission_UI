import {
    XML_SCHEMA_ACTIONS, getXMLDatafromSchemaType
} from '../actions/XML_validator'


const rand = () => Math.floor(Math.random() * 9000000);

export function ADD_FORM() {
    return {
        type: "ADD_FORM"
    };
}


const initialState = {
    chosen_schemas: [{
        id: rand(),
        xml_schema: null,
        schema_type: null,
        form_schema: null
    }]
}


export default function (state = initialState, action) {
    switch (action.type) {
        case XML_SCHEMA_ACTIONS.SET_XML_SCHEMA:
            return {
                ...state,
                chosen_schemas: [{xml_schema: action.schema}]
            }
        case XML_SCHEMA_ACTIONS.SET_SCHEMA_TYPE:
            return {
                ...state,
                chosen_schemas: [{
                    form_schema: action.schema,
                    schema_type: action.schema_type,
                    xml_schema: action.schema
                }]
            }
        case XML_SCHEMA_ACTIONS.ADD_FORM:
            return {
                ...state,
                chosen_schemas: [...state.chosen_schemas, {...getXMLDatafromSchemaType(action.schema_type).tree, id: rand()}]
            }
        default:
            return state;
    }
}

// export function addForm(state = initialState) {
//
// }
