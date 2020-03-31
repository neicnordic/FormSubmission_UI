import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import TagChild from "../TagChild"
import "./style.css"

const XMLForm = (props) => {
    const [formContent, setFormContent] = useState(null)
    const [formValues, setFormValues] = useState(null)

    useEffect(() => {
        if (props.schema) {
            setFormValues(props.schema)
            setFormContent(parseTree(props.schema))
        }
    }, [props.schema])


    const parseTree = tree => {
        const treeName = tree.name
        const content = tree.childs.map(child => <TagChild child={child} />)

        return (
            <div className="xml_form__content">
                <h3>{treeName}</h3>
                {content}
            </div>
        )
    }


    return (
        <form className="xml_form__container">
            {formContent}
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