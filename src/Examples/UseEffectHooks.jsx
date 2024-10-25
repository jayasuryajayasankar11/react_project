import React , {useState,useEffect} from 'react'

export default function UseEffectHooks() {

    const [count , setCount] = useState(0);
    const [text , setText] = useState(0);
    const [fadeIn ,setFadeIn] = useState("");

useEffect(() => {
    setText(text  + 1);
    fadeIn === "" && setFadeIn('fadeIn');
}, [count]);

  return (
    <div style={{height:"100vh"}}>
        <h1 className="title">UseEffectHook</h1>
        <h2 className="subtitle">{`You clicked ${text} times`}</h2>
        <p className={`card card-warning bg-danger text-light p-1 ${fadeIn}`}>
            Tour clicked {count}
   
        <button className="btn" onClick={() => setCount(count+1)}>Click</button>
        </p>
    </div>
  )
}
