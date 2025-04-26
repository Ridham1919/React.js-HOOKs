import React, { useContext}from "react";
import Component3 from "./Component3";
import Context from "./Context";

const Component2 = () => {
    var demo = useContext(Context)
    return (
        <>
            <h2>Component2 {demo}</h2>
            <Component3 />
        </>
    )
}

export default Component2;