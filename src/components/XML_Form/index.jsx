import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import TagChild from "../TagChild"
import "./style.css"
import fetch from 'isomorphic-fetch';

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

    function iterate(item, index, array) {
        console.log(item);
        if (index === array.length - 1) {
            console.log('The last iteration!');
        }
    }


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
                <div className="xml_form__content">
                    {/*<h5>{treeName.replace(/[^a-zA-Z ]/g, " ")}</h5>*/}
                    {content}

                </div>
                <input className="xml_form__submit" type="submit">
                </input>
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

const mapStateToProps = (state, ownProps) => ({
    schema: state.xml_form.form_schema,
    type: state.xml_form.schema_type
})

const mapDispatchToProps = dispatch => {
    return {}
}

function doFetch(Content) {
    return fetch(
        '/some/endpoint', {
            method: 'POST',
            headers: new Headers(
                {
                    'Content-Type': 'text/xml; charset=utf-8',
                    'Accept': '*/*',
                    'Accept-Language': 'en-GB',
                    'Accept-Encoding': 'gzip, deflate',
                    'Connection': 'Keep-alive',
                    'Content-Length': Content.length
                }),
            body: Content
        });
}

export default connect(mapStateToProps, mapDispatchToProps)(XMLForm)