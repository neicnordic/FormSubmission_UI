
export const XML_SCHEMA_ACTIONS = {
    SET_XML_SCHEMA: "SET_XML_SCHEMA"
}


export const setSchema = schema =>({
    type: XML_SCHEMA_ACTIONS.SET_XML_SCHEMA,
    schema
})
export const setXSDSchema = (schema) =>{
    
    return (dispatch) => {
        console.log(schema)
        dispatch(setSchema(schema))

    }
}