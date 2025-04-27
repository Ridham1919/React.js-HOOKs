import React, { useMemo, useState } from "react";

const Memo = () => {
    var [count, setcount] = useState(0)
    const handlecount = () => {
        setcount(count + 1)
    }
    var [item, setitem] = useState(0)
    const handleitem = () => {
        setitem(item + 1)
    }

    var dmemo = useMemo(function demo() {
        console.log("Hello")
        
    },[item]);


    return (
        <>
            {dmemo}
            <h1>count : {count}</h1>
            <button onClick={handlecount}>count</button>
            <h1>iteam : {item}</h1>
            <button onClick={handleitem}>item</button>
        </>

    )
}

export default Memo