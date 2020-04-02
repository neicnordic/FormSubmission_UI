import React from "react"
import TagContent from "../TagContent";
import Select from "../SelectComponent";

const MetaData = props => {

    const metadata = props.meta || {};

    const handleChange = (value, name) => {
        props.handleChange({ 
            ...metadata, 
            [name]: {
                ...metadata[name],
                value
        }});
    };

    const attributes = Object.keys(metadata);

    return attributes.map((attr, key) => {
        const enumerate = metadata[attr].options;
        return (
            <div className={"xml_form__field"} key={key}>
                <label className="xml_form__label">{attr.replace(/[^a-zA-Z ]/g, " ").toLowerCase()}</label>
                {enumerate ? (
                    <Select
                        name={attr}
                        handleChange={handleChange}
                        options={enumerate}/>
                ) : <TagContent
                        name={attr}
                        value={metadata[attr].value}
                        handleChange={handleChange}
                        placeholder={metadata[attr].placeholder} />}
            </div>
        )
    })
}


export default MetaData