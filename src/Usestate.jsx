import React,{ useState } from "react";

const UseState = () => {
    var [str , setstr] = useState('hello')
        
    const handleclick = () => {
        setstr("hiii")
    }
     return (

        <>
        <h1>{str}</h1>
        <button onClick={handleclick}>click</button>
        </>
     )
}

export default UseState