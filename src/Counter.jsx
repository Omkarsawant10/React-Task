import { useState } from "react"

export const Counter=()=>{
    const [count,setCount]=useState(0)

    const Increase=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={Increase}>Increment</button>
        </div>
    )
}