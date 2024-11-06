import React, { useState, useRef, useEffect } from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup'

export default function RegistrationForm(
    { handleCancel, showLogin,
        registered,
    }) {

    // references

    let fullName = useRef();
    useEffect(() => {
        fullName.current.focus();
    }, []);

    // state

    const [registration, SetRegistration] = useState({
        fullName: "",
        email: "",
        password: "",
        passwordConfig: ""
    });

    // handlers

    const handleInputChange = (e) => {
        SetRegistration({ ...registration, [e.target.name]: e.target.value });
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        const events = {
            fullName: registration.fullName,
            email: registration.email,
            password: registration.password,
            passwordConfig: registration.passwordConfig,
            id: Math.floor(Math.random() * 1000),
        };
        // console.log(events);

        const validateRegistrationForm = (obj) => {
            console.log(obj);
            if (
                Object.values(obj).every(
                    (value) => value || (typeof value === 'number' && value === 0)
                )
            ) {
                resetForm();
                window.alert("success");
                showLogin();
            } else {
                window.alert("Complete all fields")
            }
        };
        validateRegistrationForm(events);
    }

    function resetForm() {
        SetRegistration({
            fullName: "",
            email: "",
            password: "",
            passwordConfig: ""
        })
    }



    return (
        <div style={{ display: "flex", justifyContent: 'center' }}>
            <div className='form fadeIn' style={{ maxWidth: 500 }}>
                <Title text={"Register"} classes={"text-center mb-4"} />
                <Button
                    className="btn-close"
                    text={"X"}
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onClick={handleCancel} />

                <form onSubmit={handleRegistration}>
                    <FormGroup
                        lable={"Name"}
                        placeholder={"Enter your Name"}
                        reference={fullName}
                        value={registration.fullName}
                        onChange={handleInputChange}
                        name="fullName" />

                    <FormGroup
                        lable={"Email"}
                        placeholder={"Enter your Email"}
                        type={"email"}
                        value={registration.email}
                        onChange={handleInputChange}
                        name="email" />

                    <FormGroup
                        lable={"Password"}
                        placeholder={"Enter your Password"}
                        type={"password"}
                        value={registration.password}
                        onChange={handleInputChange}
                        name="password" />

                    <FormGroup
                        lable={"Confirm Password"}
                        placeholder={"Enter your Name"}
                        type={"password"}
                        value={registration.passwordConfig}
                        onChange={handleInputChange}
                        name="passwordConfig" />


                    <div className="d-flex space-between">
                        <Button
                            classes={"btn-primary btn-lg"}
                            type={"submit"}
                            text={"Register"}
                            onClick={() => console.log("Registered")}
                        />

                        <Button type={"button"} classes={"btn-lg"} text={"Login"} onClick={showLogin} />
                    </div>
                </form>


            </div>
        </div>
    )
}
