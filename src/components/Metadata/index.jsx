import React, { useState } from "react"
import TagContent from "../TagContent";
import Select from "../SelectComponent";
import classNames from "classnames"

const MetaData = props => {

    const metadata = props.meta || {};
    const [hasChanged, setHaschanged] = useState(false);

    const handleChange = (value, name) => {
        props.handleChange({
            ...metadata,
            [name]: {
                ...metadata[name],
                value
            }
        });
        setHaschanged(true)
    };

    const attributes = Object.keys(metadata);

    return attributes.map((attr, key) => {
        const enumerate = metadata[attr].options;
        const labelClassname = classNames('xml_form__label ', { 'error': metadata[attr].error && !hasChanged });
        return (
            <div className={"xml_form__field"} key={key}>
                <label className={labelClassname}>{attr.replace(/[^a-zA-Z ]/g, " ").toLowerCase()}</label>
                {enumerate ? (
                    <Select
                        name={attr}
                        handleChange={handleChange}
                        options={enumerate} />
                ) : <TagContent
                        error={metadata[attr].error}
                        validator={metadata[attr].validator}
                        name={attr}
                        value={metadata[attr].value}
                        handleChange={handleChange}
                        placeholder={metadata[attr].placeholder} />}
            </div>
        )
    })
}


export default MetaData