import React from "react"
import { useState, useEffect } from "react";



const TagContent = props => {
    const [value, setValue] = useState("");
    const isBoolean = props.type === "boolean";

    useEffect(() => {
        if (isBoolean)
            setValue(false)
    }, [isBoolean])

    const handleChange = (event_value) => {
        if (isBoolean) {
            setValue(!value)
            props.handleChange(!value, props.name)

        } else {
            setValue(event_value)
            props.handleChange(event_value, props.name)
        }
    }

    if (props.type === "boolean") {
        return (
            <div style={{ flexDirection: "row" }}>
                <input
                    className="xml_form__input"
                    value={value}
                    placeholder={props.placeholder}
                    onChange={e => handleChange(e.target.value)}
                    type="checkbox"></input>
                <span>{value ? "YES" : "NO"}</span>
            </div>
        )
    } else {
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
}

export default TagContent;