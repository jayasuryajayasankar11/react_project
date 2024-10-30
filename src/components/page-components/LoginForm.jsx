import React from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup'

export default function LoginForm({handleCancel}) {
  return (
    <div className='form fadeIn' style={{maxWidth:500}}>
        <Title text="Login" classes={"text-center mb-4"}/>
        <h6 className="subtitle">Enter your credentials</h6>
        <form onClick={(e) => e.preventDefault()}>
           
            <FormGroup 
            lable={"Email"} 
            type={"email"}
            placeholder={"Enter your email"}/>
            <FormGroup 
            lable={"Password"} 
            type={"password"}
            placeholder={"Enter your password"}/>
            
            <div className="d-flex space-between">
                <Button classes={"btn-primary"} type={"submit"} text={"Login"}/>
                <Button type={"submit"} text={"Close"} onClick={handleCancel}/>
            </div>
        </form>
    </div>
  )
}
