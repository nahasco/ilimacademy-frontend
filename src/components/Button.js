import React from 'react'

export default function Button(props) {

    let buttonclasses

    if (props.type == "contained") {
        buttonclasses = "contained"
    }
    else if (props.type == "outlined") {
        buttonclasses = "outlined"
    }

    return (
        <button className={buttonclasses}>{props.children}</button>
    )
}
