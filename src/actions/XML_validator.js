import StudyXML from "../schemas/Study"
import SampleXML from "../schemas/Sample"

export const XML_SCHEMA_ACTIONS = {
    SET_XML_SCHEMA: "SET_XML_SCHEMA",
    SET_SCHEMA_TYPE: "SET_SCHEMA_TYPE"
}

export const setSchemaType = schema_type => {
    return (dispatch) => {
        dispatch({
            type: XML_SCHEMA_ACTIONS.SET_SCHEMA_TYPE,
            schema_type,
            schema: getXMLDatafromSchemaType(schema_type).tree
        })
    }
}

export const submitXMLSchema = schema => ({
    type: XML_SCHEMA_ACTIONS.SET_XML_SCHEMA,
    schema
})


const getXMLDatafromSchemaType = (type) => {
    switch (type) {
        case "Study":
            return StudyXML
        case "Sample":
            return SampleXML
        default:
            return null;
    }
}