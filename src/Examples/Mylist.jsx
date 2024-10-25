import React from 'react'

export default function Mylist() {
    const items = ["item-1", "item-2", "item-3"]
    return (
        <div style={{ height: "100vh" }}>
            <h1 className='title'>Mylist</h1>
            <ul>
                {/* <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li> */}
                {items.map((item, index) => (
                    <li key={index}>{item}</li>)
                   
                )}
            </ul>
        </div>
    )
}
