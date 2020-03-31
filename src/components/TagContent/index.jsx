import React from "react"
import { useState } from "react";



const TagContent = props => {
    const [value, setValue] = useState("")

    const handleChange = (value) => {
        setValue(value)
        props.handleChange(value, props.name)
    }

    return (<>
        <input
            className="xml_form__input"
            value={value}
            placeholder={props.placeholder}
            onChange={e => handleChange(e.target.value)}
            type="text"></input>
        <span className="xml_form__option-bar"></span>

    </>)
}

export default TagContent;