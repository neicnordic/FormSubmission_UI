import React from "react"
import {useState} from "react";


const TagContent = props => {
    const [value, setValue] = useState("")

    const handleChange = (value) => {
        setValue(value)
        props.handleChange(value, props.name)
    }

    return (<>
            <table>
                <tr>
                    <td align="right"><input
                        className="xml_form__input"
                        value={value}
                        placeholder={props.placeholder}
                        onChange={e => handleChange(e.target.value)}
                        contentEditable="true"
                    /></td>
                </tr>
                {/*<tr>*/}
                {/*    <td><input*/}
                {/*        // className="xml_form__input"*/}
                {/*        contentEditable="true"*/}
                {/*        placeholder={props.placeholder}*/}
                {/*        onChange={e => handleChange(e.target.value)}*/}
                {/*        type="text"*/}
                {/*    /></td>*/}
                {/*</tr>*/}
            </table>
            <span className="xml_form__option-bar"></span>
        </>
    )
}

export default TagContent;