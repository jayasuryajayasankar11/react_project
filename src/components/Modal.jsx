import React from 'react'
import Button from './Button'
export default function Modal({title, text, loginEvent, cancelEvent}) {
    return (
        <div className='modal'>

            <div className="modal-content fadeIn-2ms">
                <h2 className="mb-1">{title}</h2>
                <p className='mb-1'>{text ? text : "Model text goes here!"}</p>
                <div className="d-flex space-between">
                    <Button classes={"btn-primary"} text={"Login"} onClick={loginEvent} />
                    <Button text={"close"} onClick={cancelEvent} />
                </div>
            </div>


        </div>
    )
}
