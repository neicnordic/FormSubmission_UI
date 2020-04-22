import React , {useState} from "react"
import classNames from "classnames"

const TagContent = props => {
    const isBoolean = props.type === "boolean";
    const isError = props.error === true;

    const [hasChanged,setHaschanged] = useState(false);

    const inputClassname = classNames('xml_form__input', { 'error': isError && !hasChanged });
    const optionBarClassname = classNames('xml_form__option-bar ', { 'error': isError && !hasChanged });


    const handleChange = (event_value) => {
        if (isBoolean) {
            props.handleChange(!props.value, props.name)

        } else {
            props.handleChange(event_value, props.name)
        }
        setHaschanged(true)
    }

    if (props.type === "boolean") {
        const val = typeof props.value === "boolean" ? props.value : false;

        return (
            <div style={{ flexDirection: "row" }}>
                <input
                    className={inputClassname}
                    value={val}
                    placeholder={props.placeholder}
                    onChange={e => handleChange(e.target.value)}
                    type="checkbox"></input>
                <span>{props.value ? "YES" : "NO"}</span>
            </div>
        )
    } else {
        return (<>
            <input
                className={inputClassname}
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => handleChange(e.target.value)}
                type="text"></input>
            <span className={optionBarClassname}></span>

        </>)
    }
}

export default TagContent;