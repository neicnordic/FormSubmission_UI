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
                key={key}
                handleChange={handleChildChange}
                child={child} />
        )
    )
};

const TagChild = (props) => {
    const [tagContent, setTagContent] = useState(null)
    const [childsCopy, setChildsCopy] = useState(null)
    const [hasChanged, setHasChanged] = useState(false)

    const isMatrix = (currentValue) => Array.isArray(currentValue);

    useEffect(() => {
        if (props.child) {
            const content = { ...props.child };
            if (childsCopy === null) {
                setChildsCopy(content.childs)
            }
            if (props.child.childs) {
                if (!props.child.childs.every(isMatrix)) {
                    content.childs = [content.childs];
                }
                else
                    content.childs = props.child.childs
            }
            setTagContent(content);
        }
    }, [props.child]);


    const handleMetaChange = (change) => {
        const newContent = {
            ...tagContent,
            meta: change
        }

        setHasChanged(true)
        setTagContent(newContent)
        props.handleChange(newContent, props.child.name)
    };

    const handleChildChange = (change, name, index = 0) => {
        const changedChild = tagContent.childs[index].map(child => {
            if (child.name === name)
                return change
            else
                return child
        });

        const newChilds = tagContent.childs
        newChilds[index] = changedChild

        const newContent = {
            ...tagContent,
            childs: newChilds
        }

        setHasChanged(true)
        setTagContent(newContent)
        props.handleChange(newContent, tagContent.name, 0)
    };

    const handleContentChange = (value) => {
        const newContent = {
            ...tagContent,
            value: value
        };

        setHasChanged(true)
        setTagContent(newContent);
        props.handleChange(newContent, tagContent.name)
    };

    const handleAddChild = () => {
        let newTagContent = { ...tagContent };
        newTagContent.childs.push(childsCopy)

        setTagContent(newTagContent)
        props.handleChange(newTagContent, props.name)

    }

    const handleDelete = (index = 0) => {
        const newContent = {
            ...tagContent,
            childs: _.remove(tagContent.childs, (n, i) => {
                return i !== index
            })
        }
        setTagContent(newContent)
        props.handleChange(newContent, tagContent.name)

    }


    const hasContent = props.child.content;
    const hasChildren = props.child.childs;
    const isMultiple = props.child.multiple;
    const isRequired = props.child.required;
    const isError = props.child.error;

    if (tagContent === null) {
        return (<></>)
    }
    const labelClassName = className('xml_form__label', {
        'xml_form__labe--bold': !tagContent.content || tagContent.placeholder,
        'error': isError && !hasChanged
    });

    return (
        <div className="xml_form__field">
            <label className={labelClassName}>{isRequired && "* "} {tagContent.name.replace(/[^a-zA-Z ]/g, " ")}</label>
            {(tagContent.placeholder && !hasContent) &&
                <label className={"xml_form__label"}>{tagContent.placeholder.toLowerCase()}</label>
            }
            <MetaData
                meta={tagContent.meta}
                handleChange={handleMetaChange} />
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
                    {tagContent.childs.map((content, index) => {
                        return (
                            <div key={index} className="xml_form__multiple_content">
                                <div style={{ float: "right" }}>
                                    <IconButton
                                        size="small"
                                        icon="minus-circle"
                                        disabled={tagContent.childs.length <= props.child.min}
                                        handleClick={() => { handleDelete(index) }} />
                                </div>
                                <DisplayChildTags
                                    handleChildChange={(value, name) => { handleChildChange(value, name, index) }}
                                    children={content} />
                            </div>
                        )
                    }
                    )}
                </>
            ) : (
                    <>
                        {hasContent && (
                            <TagContent
                                error={tagContent.error}
                                value={tagContent.value}
                                type={tagContent.type}
                                name={tagContent.name}
                                handleChange={handleContentChange}
                                placeholder={tagContent.placeholder} />
                        )}
                        {hasChildren && <DisplayChildTags
                            handleChildChange={handleChildChange}
                            children={tagContent.childs[0]} />}
                    </>
                )}
        </div>
    )
}
export default TagChild;