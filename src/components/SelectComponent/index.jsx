import React from "react"
import "./style.css"


const Select = props => {
    return (
        <>
            <select id={props.name} className="xml_form__option">
                {props.options.map(element => (
                    <option value={element}>{element}</option>)
                )}
            </select>
            <span class="xml_form__option-bar"></span>
            <label class="xml_form__option-label">Select</label>
        </>
    )
}

export default Select;