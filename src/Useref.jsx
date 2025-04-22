import React, { useRef, useState } from "react";

const Useref = () =>{

    var txtname = useRef()
    
    const handleclick = (demo) => {
        console.log(txtname);
    }

     return(
        <>
          <input type="text" ref={txtname}/>
          <button onClick={handleclick}>click</button>
        </>

     )

}

export default Useref