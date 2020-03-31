import React from "react"
import TagContent from "../TagContent";
import Select from "../SelectComponent";
import { useState } from "react";
import { useEffect } from "react";

const MetaData = props => {

    const [metaValues, setMetaValues] = useState({});

    useEffect(() => {
        if (props.meta) {
            const attributes = Object.keys(props.meta);

            let values = {};
            attributes.forEach(attr => values[attr] = "");
            setMetaValues(values)
        }
    }, [props.meta]);


    const handleChange = (value, name) => {
        setMetaValues({ ...metaValues, [name]: value })
        props.handleChange(metaValues);
    };


    const attributes = Object.keys(metaValues);

    return attributes.map(attr => {
        const enumerate = props.meta[attr].options;
        return (
            <>
                <label className="xml_form__label">{attr}</label>
                {enumerate ? (
                    <Select options={enumerate} name={attr} />
                ) : <TagContent
                        name={attr}
                        handleChange={handleChange}
                        placeholder={props.meta[attr].placeholder} />}
            </>
        )
    })
}


export default MetaData