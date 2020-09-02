import StudyXML from "../schemas/Study"
import SampleXML from "../schemas/Sample"
import AnalysisXML from "../schemas/Analysis"
import DatasetXML from "../schemas/Dataset"
import ExperimentXML from "../schemas/Experiment"
import PolicyXML from "../schemas/Policy"
import RunXML from "../schemas/Run"
import DACXML from "../schemas/DAC"

export const XML_SCHEMA_ACTIONS = {
    SET_XML_SCHEMA: "SET_XML_SCHEMA",
    SET_SCHEMA_TYPE: "SET_SCHEMA_TYPE",
    ADD_FORM: "ADD_FORM"
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

export const addXMLSchema = schema => ({
    type: XML_SCHEMA_ACTIONS.SET_XML_SCHEMA,
    schema
})


export const getXMLDatafromSchemaType = (type) => {
    switch (type) {
        case "Study":
            return StudyXML
        case "Sample":
            return SampleXML
        case "Analysis":
            return AnalysisXML
        case "Dataset":
            return DatasetXML
        case "Experiment":
            return ExperimentXML
        case "Policy":
            return PolicyXML
        case "Run":
            return RunXML
        case "DAC":
            return DACXML
        default:
            return null;
    }
}
