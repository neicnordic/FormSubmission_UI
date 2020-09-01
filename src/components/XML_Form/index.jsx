import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import TagChild from "../TagChild"
import "./style.css"
// import {ADD_FORM} from "../../reducers/xmlReducer";
import {getXMLDatafromSchemaType} from "../../actions/XML_validator";

const rand = () => Math.floor(Math.random() * 9000000);

const XMLForm = (props) => {
    const [formTreeComponents, setFormTreeComponents] = useState(null)
    const [formContent, setFormContent] = useState({})


    useEffect(() => {
        if (props.schemas) {
            let content = {}
            console.log(props.schemas)
            // for (let d = 0; d < props.schemas.length; d++) {
            //     console.log(props.schemas[d])
            //     props.schemas[d].childs.map(child => child.name).forEach(name => content[name] = null);
            //     setFormContent(content);
            //     setFormTreeComponents(parseTree(props.schemas));
            // }
            props.schemas.childs.map(child => child.name).forEach(name => content[name] = null);
            setFormContent(content);
            setFormTreeComponents(parseTree(props.schemas));


            // data.forEach(function (item) {
            //     schema.form_schema.childs.map(child => child.name).forEach(name => content[name] = null);
            //     setFormContent(content);
            //     setFormTreeComponents(parseTree(props.form_schema));
            // })
        }
    }, [props.schemas])


    const handleChildChange = (change, name) => {
        setFormContent({
            ...formContent,
            [name]: change
        })
    };


    const addForm = (props) => {
        return {
            ...props.state,
            forms: [...this.state.chosen_schemas, {...getXMLDatafromSchemaType(this.state.schema_type).tree}]
        }
    };

    const parseTree = tree => {
        const treeName = tree.name
        const content = tree.childs.map(child =>
            <TagChild
                handleChange={handleChildChange}
                key={child.name}
                child={child}/>
        )

        return (
            <>
                <div id="insertion" className="xml_form__content">
                    <h5>{treeName.replace(/[^a-zA-Z ]/g, " ")}</h5>
                    {content}
                </div>

                <input className="xml_form__submit" type="submit"/>
                <input type="button" onClick={addForm} value="Add one more "/>
            </>
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formContent)
    }

    return (
        <form className="xml_form__container" onSubmit={handleSubmit}>
            {formTreeComponents}
        </form>
    )
}

// export function addForm(state) {
//     return updateStateToProps(state.xml_form.form_schema)
// }

const mapStateToProps = (state, ownProps) => ({
    schemas: state.xml_form.chosen_schemas[0].form_schema
    // type: state.xml_form.chosen_schemas[0].schema_type,
})


const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(XMLForm)

