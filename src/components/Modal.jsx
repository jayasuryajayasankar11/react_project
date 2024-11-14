import React from 'react'
import Button from './Button'

import { ModalStyle } from './Styles/ModalStyle'

export default function Modal({title, text, loginEvent, cancelEvent}) {
    return (
        <ModalStyle>

            <div className="modal-content fadeIn-2ms">
                <h2>{title}</h2>
                <p>{text ? text : "Model text goes here!"}</p>
                <div className="d-flex space-between">
                    <Button classes={"btn-primary"} text={"Login"} onClick={loginEvent} />
                    <Button text={"close"} onClick={cancelEvent} />
                </div>
            </div>


        </ModalStyle>
    )
}
