import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup'

export default function LoginForm({ handleCancel, loggedIn, showRegister }) {
  // states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

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
    const event = {
      email: email,
      password: password,
      id: Math.floor(Math.random() * 10000)
    };
    // console.log(event);
    validateloginForm();

  }
  // const changeInputs = (e) => {
  //   emailRef.current.focus() && setEmail(e.target.value);
  //   passwordRef.current.focus() && setPassword(e.target.value);
  // }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  function validateloginForm() {
    email === "" && window.alert("Please enter Your Email");
    password === "" || password.length <= 4 ? window.alert("Please enter Your Password") :
      loggedIn();
  }
  // Effects

  useEffect(() => {
    emailRef.current.focus()
  }, [])



  return (
    <div style={{display:"flex" , justifyContent:'center'}}>
      <div className='form fadeIn' style={{ maxWidth: 500 }}>
      <Title text="Login" classes={"text-center mb-4"} />
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
          <Button
            className="btn-close"
            text={"X"}
            style={{ position: "absolute", top: 0, right: 0 }}
            onClick={handleCancel} />
          <Button type={"button"} text={"Register"} onClick={showRegister} />
        </div>
      </form>
    </div>
    </div>
  )
}
