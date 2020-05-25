import React from "react"
import {useState} from "react";

function addRow() {
    let itm = document.getElementById("col").lastChild;
    let cln = itm.cloneNode(true);
    document.getElementById("col").appendChild(cln);
}


const TagContent = props => {
    const [value, setValue] = useState("")

    const handleChange = (value) => {
        setValue(value)
        props.handleChange(value, props.name)
    }

    return <>
        <input type="button" onClick={addRow} value="Add one more "/>
        <table id="table" class="paleBlueRows">
            <tr>
                <td id="col"><input id="col"
                    // className="xml_form__input"
                    value={value}
                    // placeholder={props.placeholder}
                    onChange={e => handleChange(e.target.value)}
                    contentEditable="true"
                /></td>
            </tr>
        </table>
        {/*<script>*/}
        {/*    {function addRow() {*/}
        {/*        var itm = document.getElementById("table").lastChild;*/}
        {/*        var cln = itm.cloneNode(true);*/}
        {/*        document.getElementById("table").appendChild(cln);*/}
        {/*    }}*/}
        {/*</script>*/}
        <span className="xml_form__option-bar"></span>
    </>
}

export default TagContent;