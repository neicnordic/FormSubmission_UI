import React from "react"
import {useState} from "react";


const TagContent = props => {
    const [value, setValue] = useState("")

    const handleChange = (value) => {
        setValue(value)
        props.handleChange(value, props.name)
    }

    return <>
        <table id="table" class="paleBlueRows">
            <tr>
                <td id="col"><input
                    // className="xml_form__input"
                    value={value}
                    placeholder={props.placeholder}
                    onChange={e => handleChange(e.target.value)}
                    contentEditable="true"
                /></td>
            </tr>
        </table>
        <span className="xml_form__option-bar"></span>
    </>
}

export default TagContent;