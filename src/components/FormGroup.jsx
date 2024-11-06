import React from 'react'

export default function FormGroup(
    {lable , type , placeholder ,disabled = false,
        value , onChange , reference,name
    }) {
    return (
        <div className="form-group">
            <label className='text-primary'>{lable}</label>
            <input 
            type={type} 
            className='form-control' 
            placeholder={placeholder} 
            disabled={disabled} 
            value={value}
            onChange={onChange}
            ref={reference}
            name={name}/>
        </div>
    )
}
