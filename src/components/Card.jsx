import React, { Children } from 'react'
import Button from './Button'

export default function Card({
    title,text,icon_1,icon_2,icon_3,btnIcon, children ,startEvent,
    cardHeader = true, cardBody = true ,cardFooter =true

}) {

    return (
        <div className='card' style={{maxWidth: 400}}>
            {cardHeader && <div className='card-header'>
                {icon_1}
                {icon_2}
                {icon_3}
                </div>}
            <div className='card-body'>
                <h3 className='card-title'>{title ? title : "Card Tile"}</h3>
                <p className='card-text'>{text}
                {children}
                </p>
            </div>
            {cardFooter && <div className='card-footer'>
                <Button classes={"btn-secondary"} 
                text={"Start learning"} icon={btnIcon} onClick={startEvent}
                />
                </div>}
        </div>
    )
}
