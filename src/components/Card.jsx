import React, { Children } from 'react'

export default function Card({
    title,text,icon_1,icon_2,icon_3,btnIcon,startEvent,
    cardHeader, cardText, children , icon

}) {

    return (
        <div className='card'>
            {cardHeader && <div className='cardHeader'>{icon}{cardHeader}</div>}
            <div className='cardBody'>
                <p>{cardText}</p>
                {children}
            </div>
        </div>
    )
}
