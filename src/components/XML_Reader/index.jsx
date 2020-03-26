import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'
import { connect } from 'react-redux';
import "./style.css"

import {
    setXSDSchema
} from '../../actions/XML_validator'

const XMLSchemaReader = (props) => {
    const [file, setFile] = useState(null)

    const parseFile = (stringXML) => {
        var xml = new XMLParser().parseFromString(stringXML);    // Assume xmlText contains the example XML
        console.log(xml)
        props.setXMLSchema(xml)
    }

    const handleSubmit = e => {
        e.preventDefault();

        var text = "";
        var reader = new FileReader();
        var onload = function (event) {
            text = reader.result;
            parseFile(text);

        };
        reader.onload = onload;
        reader.readAsText(file);
        return false;
    }


    return (
        <form className="XML__schema-reader-form" onSubmit={handleSubmit} >
            <div className="form__input_container">
                <label for="myfile">Select a file:</label>
                <input type="file" id="myfile" name="xml_schema" onChange={e => setFile(e.target.files[0])}></input>
            </div>
            <input className="form__button--submit" type="submit"></input>
        </form>
    )
}

const mapStateToProps = (state, ownProps) => ({
    schema: state.xml_form.xml_schema,
})

const mapDispatchToProps = dispatch => {
    return {
        setXMLSchema : (schema)=> dispatch(setXSDSchema(schema))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(XMLSchemaReader)
