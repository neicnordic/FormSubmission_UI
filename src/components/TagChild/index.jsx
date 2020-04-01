import React from "react"
import className from "classnames"
import TagContent from "../TagContent"
import IconButton from "../IconButton"
import MetaData from '../Metadata'
import { useEffect } from "react"
import { useState } from "react"
import _ from "lodash"


const DisplayChildTags = ({ children, handleChildChange }) => {
    return (
        children.map((child, key) =>
            <TagChild
                key={child.name}
                handleChange={handleChildChange}
                child={child} />
        )
    )
};

const TagChild = (props) => {
    const [tagContent, setTagContent] = useState({});

    useEffect(() => {
        let content = {
            meta: {},
            content: null
        }
        if (props.child.childs)
            content.childs = props.child.childs.map(child => ({ name: child.name }))
        if (props.child.multiple) {
            content.childs = [content.childs]
        }
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

    const handleAddChild = () => {
        let newTagContent = { ...tagContent };
        newTagContent.childs.push(props.child.childs.map(child => ({ name: child.name })))
        setTagContent(newTagContent)
    }

    const handleDelete = index => {
        let newContent = { ...tagContent };

        newContent.childs.splice(index, 1)
        setTagContent(newContent)
    }


    const hasContent = props.child.content;
    const hasChildren = props.child.childs;
    const isMultiple = props.child.multiple;

    const labelClassName = className('xml_form__label', { 'xml_form__labe--bold': !props.child.content });

    return (
        <div className="xml_form__field">
            <label className={labelClassName}>{props.child.name.replace(/[^a-zA-Z ]/g, " ")}</label>
            <MetaData
                meta={props.child.meta}
                handleChange={handleMetaChange}
            />
            {hasContent && (
                <TagContent
                    type={props.child.type}
                    name={props.child.name}
                    handleChange={handleContentChange}
                    placeholder={props.child.placeholder} />
            )}
            {isMultiple && Array.isArray(tagContent.childs) ? (
                <>
                    <div className="xml_form__comand">
                        <IconButton
                            size="small"
                            icon="plus-circle"
                            disabled={false}
                            handleClick={handleAddChild}
                        />
                    </div>
                    {tagContent.childs.map((_, index) =>
                        <div className="xml_form__multiple_content">
                            <div style={{ float: "right" }}>
                                <IconButton
                                    size="small"
                                    icon="minus-circle"
                                    disabled={tagContent.childs.length === 1}
                                    handleClick={() => { handleDelete(index) }} />
                            </div>
                            <DisplayChildTags
                                handleChildChange={handleChildChange}
                                children={props.child.childs} />
                        </div>

                    )}
                </>
            ) : hasChildren && <DisplayChildTags
                handleChildChange={handleChildChange}
                children={props.child.childs} />
            }

        </div>
    )
}
export default TagChild;