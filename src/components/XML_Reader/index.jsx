import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'
import { connect } from 'react-redux';
import { submitXMLSchema } from '../../actions/XML_validator'
import "./style.css"


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
        <div className="container">
            <form className="form_XML" onSubmit={handleSubmit} >
                <div className="form_XML__input_container">
                    <label for="myfile">Select a file:</label>
                    <input type="file" id="myfile" name="xml_schema" onChange={e => setFile(e.target.files[0])}></input>
                </div>
                <input className="form_XML__button--submit" type="submit"></input>
            </form>
            <div>
                {props.schema && JSON.stringify(props.schema)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    schema: state.xml_form.xml_schema,
})

const mapDispatchToProps = dispatch => {
    return {
        setXMLSchema: (schema) => dispatch(submitXMLSchema(schema))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(XMLSchemaReader)
