import React from "react"
import "./style.css"


const Select = props => {
    const handleChange =(e)=>{
        props.handleChange(e.target.value,props.name)
    }

    return (
        <>
            <select id={props.name} className="xml_form__option"
                onChange={e => handleChange(e)}>
                {props.options.map((element, key) => (
                    <option key={key} value={element}>{element}</option>)
                )}
            </select>
            <span className="xml_form__option-bar"></span>
        </>
    )
}

export default Select;