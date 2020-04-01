import React, { useState } from 'react'
import XMLParser from 'react-xml-parser'
import { connect } from 'react-redux';
import { submitXMLSchema } from '../../actions/XML_validator'
import "./style.css"


const XMLSchemaReader = (props) => {
    const [file, setFile] = useState(null)
    const [XMLFile, setXMLFile] = useState(null)


    const parseFile = (stringXML) => {
        var xml = new XMLParser().parseFromString(stringXML);    // Assume xmlText contains the example XML
        props.setXMLSchema(xml)
    }

    const handleSubmit = e => {
        e.preventDefault();

        var text = "";
        var reader = new FileReader();
        var onload = function (event) {
            text = reader.result;
            setXMLFile(text)
            parseFile(text);

        };
        reader.onload = onload;
        reader.readAsText(file);

        return false;
    }


    return (
        <div className="container">
            <form className="xml__reader" onSubmit={handleSubmit} >
                <div className="xml__reader__input_container">
                    <label for="myfile">Select a file:</label>
                    <input type="file" id="myfile" name="xml_schema" onChange={e => setFile(e.target.files[0])}></input>
                </div>
                <input className="xml__reader__button--submit" type="submit"></input>
            </form>
            <div className="xml__visualizer" style={{ height: props.schema ? '600px' : '0' }}>
                {props.schema && (
                    <textarea disabled={true} className="xml__visualizer_content">
                        {XMLFile}
                    </textarea>
                )}
            </div>
            {props.schema && <input className="xml_form__submit" type="submit" />}
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
