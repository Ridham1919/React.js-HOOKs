import React, { useRef, useState } from "react";

const Useref = () =>{

    var txtname = useRef()
    
    const handlechange = (demo) => {
        console.log(txtname);
    }

     return(
        <>
          <input type="text" ref={txtname}/>
          <button onClick={handlechange}>click</button>
        </>

     )

}

export default Useref