import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import TagChild from "../TagChild"
import "./style.css"

const XMLForm = (props) => {
    const [formTreeComponents, setFormTreeComponents] = useState(null)
    const [formContent, setFormContent] = useState({})

    useEffect(() => {
        if (props.schema) {
            let content = {}

            props.schema.childs.map(child => child.name).forEach(name => content[name] = null);
            setFormContent(content);

            setFormTreeComponents(parseTree(props.schema));
        }
    }, [props.schema])


    const handleChildChange = (change, name) => {
        setFormContent({
            ...formContent,
            [name]: change
        })
    };


    const parseTree = tree => {
        const treeName = tree.name
        const content = tree.childs.map(child =>
            <TagChild
                handleChange={handleChildChange}
                key={child.name}
                child={child} />
        )

        return (
            <>
                <div className="xml_form__content">
                    <h3>{treeName.replace(/[^a-zA-Z ]/g, " ")}</h3>
                    {content}
                </div>
                <input className="xml_form__submit" type="submit">
                </input>
            </>
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    
    return (
        <form className="xml_form__container" onSubmit={handleSubmit}>
            {formTreeComponents}
        </form>
    )
}

const mapStateToProps = (state, ownProps) => ({
    schema: state.xml_form.form_schema,
    type: state.xml_form.schema_type
})

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XMLForm)