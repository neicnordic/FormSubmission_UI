import React from "react"
import className from "classnames"
import TagContent from "../TagContent"
import IconButton from "../IconButton"
import MetaData from '../Metadata'
import { useEffect } from "react"
import { useState } from "react"


const TagChild = (props) => {
    const [tagContent, setTagContent ] = useState({});
    
    useEffect(()=>{
        let content = {
            meta: {},
            content: ""
        }
        if(props.child.childs)
            content.childs = props.child.childs.map(_=>({}))

        setTagContent(content)

        return null;
    },[props.child])

    const handleMetaChange = (change) => {
        setTagContent({
            ...tagContent,
            meta: change
        })
    };

    const handleChildChange = (change,name) => {
        setTagContent({
            ...tagContent,
            content: change
        })
    };

    const handleContentChange = (value, name) => {

    };

    const hasContent = props.child.content;
    const hasChildren = props.child.childs;

    const isMultiple = props.child.multiple;
    
    const labelClassName = className('xml_form__label', { 'xml_form__labe--bold': !props.child.content });
    
    console.log(tagContent)
    return (
        <div className="xml_form__field">
            <label className={labelClassName}>{props.child.name}</label>
            <MetaData
                meta={props.child.meta}
                handleChange={handleMetaChange}
            />
            {hasContent && (
                <TagContent
                    name={props.child.name}
                    handleChange={handleContentChange}
                    placeholder={props.child.placeholder} />
            )}
            {hasChildren && props.child.childs.map(child => <TagChild child={child} />)}
        </div>
    )
}
export default TagChild;