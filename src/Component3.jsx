import React, { useContext } from "react";
import Context from "./Context";

const Component3 = () => {
    var demo = useContext(Context)
    return (
        <>
            <h2>Component3 {demo}</h2>
        </>
    )
}

export default Component3;