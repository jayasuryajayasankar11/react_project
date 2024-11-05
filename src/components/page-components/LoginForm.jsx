import React, {useState , useEffect, useRef} from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup'

export default function LoginForm({handleCancel}) {
  // states
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("");

  // reference

  let emailRef = useRef();
  let passwordRef = useRef(); 

  // handlers
  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    // passwordRef.current.value === "" && passwordRef.current.focus();
    const  event = {
      email : email,
      password : password,
      id : Math.floor(Math.random() * 10000)
    };
    console.log(event)
  }
  // const changeInputs = (e) => {
  //   emailRef.current.focus() && setEmail(e.target.value);
  //   passwordRef.current.focus() && setPassword(e.target.value);
  // }

  // Effects

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  

  return (
    <div className='form fadeIn' style={{maxWidth:500}}>
        <Title text="Login" classes={"text-center mb-4"}/>
        <h6 className="subtitle">Enter your credentials</h6>
        <form onSubmit={handleSubmit}>
           
            <FormGroup 
            lable={"Email"} 
            type={"email"}
            placeholder={"Enter your email"}
            value={email}
            onChange={changeEmail}
            reference={emailRef}
            // onChange={changeInputs}
            />
            <FormGroup 
            lable={"Password"} 
            type={"password"}
            placeholder={"Enter your password"}
            value={password}
            onChange={changePassword}
            reference={passwordRef}
            // onChange={changeInputs}
            />
            
            <div className="d-flex space-between">
                <Button 
                classes={"btn-primary"} 
                type={"submit"} 
                text={"Login"} 
                onClick={() => window.alert("Form Submission")}
                />
                <Button type={"submit"} text={"Close"} onClick={handleCancel}/>
            </div>
        </form>
    </div>
  )
}
