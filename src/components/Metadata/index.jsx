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
        const newValues = { ...metaValues, [name]: value }
        setMetaValues(newValues)
        props.handleChange(newValues);
    };


    const attributes = Object.keys(metaValues);

    return attributes.map((attr, key) => {
        const enumerate = props.meta[attr].options;
        return (
            <div className={"xml_form__field"} key={key}>
                <label className="xml_form__label">{attr}</label>
                {enumerate ? (
                    <Select
                        name={attr}
                        handleChange={handleChange}
                        options={enumerate}/>
                ) : <TagContent
                        name={attr}
                        handleChange={handleChange}
                        placeholder={props.meta[attr].placeholder} />}
            </div>
        )
    })
}


export default MetaData