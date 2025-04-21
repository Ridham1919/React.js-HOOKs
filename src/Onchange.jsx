import React, { useState } from "react";

const OnChange = () =>{

    var[data,setData] = useState('')

    const handlechange = (demo) => {
        setData(demo.target.value)
    }

     return(
        <>
          <h2>{data}</h2>
          <input type="text" onChange={handlechange}/>
        </>

     )

}

export default OnChange