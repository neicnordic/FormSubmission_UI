import React from "react"


const TagContent = props => {
    const isBoolean = props.type === "boolean";


    const handleChange = (event_value) => {
        if (isBoolean) {
            props.handleChange(!props.value, props.name)

        } else {
            props.handleChange(event_value, props.name)
        }
    }

    if (props.type === "boolean") {
        return (
            <div style={{ flexDirection: "row" }}>
                <input
                    className="xml_form__input"
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={e => handleChange(e.target.value)}
                    type="checkbox"></input>
                <span>{props.value ? "YES" : "NO"}</span>
            </div>
        )
    } else {
        return (<>
            <input
                className="xml_form__input"
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => handleChange(e.target.value)}
                type="text"></input>
            <span className="xml_form__option-bar"></span>

        </>)
    }
}

export default TagContent;