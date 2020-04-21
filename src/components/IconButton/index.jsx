import React from 'react'
import classnames from "classnames"
import './style.css'

const IconButton = props => {

    const iconButtonClassname = classnames('icon_button ', {
        'icon_button--disabled': props.disabled,
        'icon_button--circle': props.circle
    });
    const iconClassname = classnames(`fas fa-${props.icon} ${props.size}`);

    return (
        <button
            disabled={props.disabled}
            className={iconButtonClassname}
            onClick={(e) => {
                e.preventDefault();
                props.handleClick()
            }}>
                { props.text || "" }
                < i className = { iconClassname } ></i >
        </button >
    )
};


export default IconButton;