import React, {useState} from 'react'

export default function UseStateHooksEx() {

    const [count, setCount] = useState(0);

    let countJS = 0;
    function countInJs(e){
        if (e.target.classList.contains("+")){
            console.log(countJS);
            return( countJS += 1);
        }else{
            console.log(countJS);
            return(countJS -= 1);
        }
    }
   

    return (
        <div>
            <h1>UseStateHooksEx</h1>
            <button className="btn +" onClick={(e) => countInJs(e)}>+</button>
            <span>Your Number is {countInJs}</span>
            <button className="btn" onClick={(e) => countInJs(e)}>-</button>

            <button className="btn +" onClick={() =>setCount(count + 1)}>+</button>
            <span>Your Number is {count}</span>
            <button className="btn" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
