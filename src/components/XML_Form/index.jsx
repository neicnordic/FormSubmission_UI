import React, {useEffect, useState, useRef} from 'react'
import {connect} from "react-redux"
import TagChild from "../TagChild"
import {
    setLoadingState,
    setPopout
} from "../../actions/app.actions"


import "./style.css"
import axios from "axios";


const TRYGGVE_API = axios.create({
    baseURL: 'http://localhost:5000'
});


const XMLForm = (props) => {
    const [formTreeComponents, setFormTreeComponents] = useState(null)
    const [treeContent, setTreeContent] = useState(null)

    const formEl = useRef(null);

    useEffect(() => {
        if (props.schema) {
            setTreeContent(null)
            setFormTreeComponents(parseTree(props.schema));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.schema])


    const handleChildChange = (change, name, index) => {
        setTreeContent(change)
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.setLoadingState(true)

        try {
            const validationTree = validateChild({...treeContent, required: true})
            if (validationTree.valid) {
                let xmlDoc = document.implementation.createDocument(null, props.schema.name);
                let element = xmlDoc.createElement(treeContent.name)

                let childTags = treeContent.childs[0].map(child => createXMLTag(xmlDoc, child))
                childTags.filter(el => el !== null).forEach(tag => element.appendChild(tag))
                xmlDoc.documentElement.appendChild(element)

                e.preventDefault();
                var RealXML = new XMLSerializer().serializeToString(xmlDoc);
                var blob = new Blob([RealXML], {type: 'text/octet-stream'});
                var file = new File([blob], "foo.xml", {type: "text/octet-stream"});

                var formData = new FormData();

                formData.append('file', file);
                formData.append('filename', validationTree.name + '.xml');

                return TRYGGVE_API.post(`/upload`, formData, {
                    params: {'object_type': validationTree.name},
                    headers: {
                        'Content-Type': 'text/xml'
                    }
                })
                    .then((response) => {
                        alert(response);
                        props.setLoadingState(false)
                    }, (error) => {
                        console.log(error.value);
                        alert(error.value);
                        props.setLoadingState(false)
                    });

            } else {
                let newSchema = {
                    ...props.schema,
                    childs: [setError(treeContent, validationTree)]
                }
                setFormTreeComponents(parseTree(newSchema));
                props.setPopout({display: true, content: "Metadata couldn't be created. Check missing fields."})
                props.setLoadingState(false)
            }

        } catch (e) {
            props.setPopout({display: true, content: "Metadata couldn't be created. Check missing fields."})
            props.setLoadingState(false)
        }
        setTimeout(() => {
            props.setLoadingState(false)
        }, 500)

    }

    const setError = (child, errorchild) => {
        if (errorchild.valid) {
            return child
        } else {
            let newChild = {...child};

            if (child.meta) {
                Object.keys(child.meta).forEach(key => {
                    if (child.meta[key].value === "") {
                        newChild.meta[key].error = true
                    }
                })
            }

            if (child.content && child.content !== "") {
                newChild.error = true
            }
            console.log(child, errorchild)
            if (!errorchild.childs || errorchild.childs.length === 0) {
                return newChild
            } else {
                return {
                    ...newChild,
                    childs: child.childs[0].map((c, i) => setError(c, errorchild.childs[i]))
                }
            }
        }
    }


    const createXMLTag = (documet, child) => {

        // CREATE THE XML TAG FOR THE CHILD
        var xmlTag = documet.createElement(child.name);
        let tes = false
        // IF CHILD HAS META DATA ADD IT AS AN ATTRIBUTE
        if (child.meta) {
            Object.keys(child.meta).forEach(key => {
                xmlTag.setAttribute(key, child.meta[key].value);
            })
            tes = true
        }
        //IF IT HAS MORE CHILDS, WE RECURSIVELY CREATE MORE TAGS
        if (child.childs && child.childs.length > 0) {
            let childs = child.childs

            if (Array.isArray(childs[0])) {
                childs = childs[0]
            }

            const tagChilds = childs.map(child => createXMLTag(documet, child));
            tagChilds.forEach(element => {
                if (element !== null) {
                    xmlTag.appendChild(element)
                    tes = true
                }
            });
        }
        if (child.content && child.value !== "" && child.value !== null) {
            let text = document.createTextNode(child.value)
            xmlTag.appendChild(text)
            tes = true

        }
        if (tes)
            return xmlTag
        else
            return null
    }

    const parseTree = tree => {
        const treeName = tree.name
        const content = tree.childs.map(child => {
            return (
                <TagChild
                    handleChange={handleChildChange}
                    key={child.name}
                    child={child}/>)
        })

        return (
            <>
                <div className="xml_form__content">
                    <h3>{treeName.replace(/[^a-zA-Z ]/g, " ")}</h3>
                    {content}
                </div>
                <input className="xml_form__submit" type="submit" data-testid="XML_form">
                </input>
            </>
        )
    }


    const validateChild = (child) => {
        let errors = {
            name: child.name,
            meta: {},
            valid: true,
            childs: []
        }

        if (child.required) {
            // VALIDATE META DATA
            if (child.meta) {
                Object.keys(child.meta).forEach(key => {
                    errors = {
                        ...errors,
                        meta: {
                            ...errors.meta,
                            [key]: child.required ? child.meta[key].value !== "" : false
                        }
                    }
                })
            }

            let isMetaValid = child.meta ? Object.keys(errors.meta).every(key => errors.meta[key] === true) : true;
            let isContentValid = child.content ? child.value !== "" : true;
            let isChildValid = (child.childs && child.childs.length > 0) ? false : true;

            if (child.childs && child.childs.length > 0) {
                errors = {...errors, childs: child.childs[0].map(child => validateChild(child))}
                isChildValid = errors.childs.every(v => v.valid === true);
            }
            errors.valid = isMetaValid && isContentValid && isChildValid

        }

        return errors
    }

    if (!formTreeComponents) {
        return (
            <div className="welcome__container">
                <h3>Welcome!</h3>
                <span>Please select a form from the navigation bar to fill-in the desired metadata</span>
                <span>or upload an XML file with the desired metadata to upload.</span>
            </div>
        )
    } else {
        return (
            <form className="xml_form__container" ref={formEl} onSubmit={handleSubmit} data-testid="XML_form">
                {formTreeComponents}
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    schema: state.xml_form.form_schema,
    type: state.xml_form.schema_type
})

const mapDispatchToProps = dispatch => {
    return {
        setLoadingState: (state) => dispatch(setLoadingState(state)),
        setPopout: (popout) => dispatch(setPopout(popout))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XMLForm)