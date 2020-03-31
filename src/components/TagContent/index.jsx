import React from "react"
import { useState } from "react";



const TagContent = props => {
    const [contentCount, setContentCount] = useState(2);

    const isMultiple = props.multiple;

    console.log(isMultiple)
    const handleController = command => {

    }


    return (<>
        {isMultiple ? (
            <>
                <div>
                    <button>Add</button>
                </div>
                {new Array(contentCount).fill(1).map((_, key) => {
                    return (<input key={key} className="xml_form__input" type="text"></input>)
                })}
            </>
        )
            : <input className="xml_form__input" type="text"></input>}
    </>)
}

export default TagContent;