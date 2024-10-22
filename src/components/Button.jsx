import React from 'react'

export default function Button({ classes, text, type , style , onClick }) {

    const alertMissingHandler = () => window.alert('Added event handler to the button')
    return (
        <button type={type}
            className={`btn ${classes}`}
            style={style}
            onClick={onClick ? onClick:alertMissingHandler}>
            {text ? text : "Click"}
        </button>
    )
}
