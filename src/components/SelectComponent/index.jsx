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
        </>
    )
}

export default Select;