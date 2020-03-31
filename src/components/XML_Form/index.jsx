import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import "./style.css"
import className from "classnames"
import Select from '../SelectComponent'
import TagContent from "../TagContent"
import IconButton from "../IconButton"


const XMLForm = (props) => {
    const [formContent, setFormContent] = useState(null)
    useEffect(() => {
        if (props.schema) {
            setFormContent(parseTree(props.schema))
        }
    }, [props.schema])

    const parseTree = tree => {
        const treeName = tree.name
        const content = tree.childs.map(child => parseChild(child))
        return (
            <div className="xml_form__content">
                <h3>{treeName}</h3>
                {content}
            </div>
        )
    }

    const parseChild = (child) => {
        const labelClassName = className('xml_form__label',{'xml_form__labe--bold': !child.content})
        return (
            <div className="xml_form__field">
                <label className={labelClassName}>{child.name}</label>
                {parseMetaData(child.meta)}
                {child.content && <TagContent placeholder={child.placeholder} />}
                {child.multiple && <div className="xml_form__comand">
                    <IconButton
                        text=""
                        handleClick={()=>{}}
                        circle={true}
                        icon={`plus`} />
                </div>}
                {child.childs && child.childs.map(child => parseChild(child))}
            </div>
        )
    }
    const parseMetaData = (meta) => {
        if (meta) {
            return Object.keys(meta).map(key => {
                const enumerate = meta[key].options;
                return (
                    <>
                        <label className="xml_form__label">{key}</label>
                        {enumerate ? (
                            <Select options={enumerate} name={key} />
                        ) : (<input type="text"
                            className="xml_form__input"
                            placeholder={meta[key].placeholder} />)}
                    </>
                )
            })
        }
        console.log(meta)
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