import React from "react"
import className from "classnames"
import TagContent from "../TagContent"
import IconButton from "../IconButton"
import MetaData from '../Metadata'
import { useEffect } from "react"
import { useState } from "react"
import _ from "lodash"

const TagChild = (props) => {
    const [tagContent, setTagContent] = useState({});

    useEffect(() => {
        let content = {
            meta: {},
            content: null
        }
        if (props.child.childs)
            content.childs = props.child.childs.map(child => ({ name: child.name }))

        setTagContent(content)
    }, [props.child])

    const handleMetaChange = (change) => {
        const newContent = {
            ...tagContent,
            meta: change
        }
        setTagContent(newContent)
        props.handleChange(newContent, props.child.name)
    };

    const handleChildChange = (change, name) => {
        const newChilds = _.unionBy([{ ...change, name }], tagContent, 'name')
        const newContent = {
            ...tagContent,
            childs: newChilds
        };
        setTagContent(newContent);
        props.handleChange(newContent, props.child.name)
    };

    const handleContentChange = (value, name) => {
        const newContent = {
            ...tagContent,
            content: value
        };

        setTagContent(newContent);
        props.handleChange(newContent, props.child.name)
    };

    const hasContent = props.child.content;
    const hasChildren = props.child.childs;

    const isMultiple = props.child.multiple;

    const labelClassName = className('xml_form__label', { 'xml_form__labe--bold': !props.child.content });

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
            {hasChildren && props.child.childs.map((child, key) => <TagChild key={child.name} handleChange={handleChildChange} child={child} />)}
        </div>
    )
}
export default TagChild;