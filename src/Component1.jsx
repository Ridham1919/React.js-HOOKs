import React from "react";
import Component2 from "./Component2";
import Context from "./Context";

const Component1 = () => {
    var str = "Hello100";
    return (
        <>
            <Context.Provider value={str}>
                <h2>Component1 {str}</h2>
                <Component2 />
            </Context.Provider>
        </>
    )
}

export default Component1;