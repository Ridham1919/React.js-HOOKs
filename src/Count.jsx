import React, { useState } from "react"

const Count = () => {

    var [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
    
    return (
        <div>                                     
            <h2>Count:{count}</h2>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Count;
