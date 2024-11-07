import React, { useState } from 'react'
import Button from '../components/Button'

export default function ThrowError() {

  const [error , setError] = useState();
  const handleError = (e) => {

    // using js

    // try{
    //   throw new Error("Whoops!");

    // }catch(event) {
    //   console.log(`${event.name} : ${event.message}`);
    // }

    // using react

    try{
      throw Error(" React component!");

    }catch(error) {
      setError(error)
    }

  };

  if (error) {
    return <div className="container">
      <div className="alert alert-danger">Caught an Error From {error.message}</div>
    </div>
  }

  return (
    <div style={{height : "100vh"}} className='container'>
      <h1 className='title'>ThrowError</h1>
      
      <Button onClick={handleError}/>
      </div>
  )
}
