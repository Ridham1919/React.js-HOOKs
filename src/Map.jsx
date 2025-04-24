import React from "react";

const Map = () => {
    
    var data = [{ "name": "ridham", "age": "17" }, { "name": "admin", "age": "18" }, { "name": "admin", "age": "18" },{ "name": "admin", "age": "18" },{ "name": "admin", "age": "18" },{ "name": "admin", "age": "17" },{ "name": "admin", "age": "17" }]


    return (

        <>
            <table border={1} cellPadding={7} cellSpacing={0}>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    data.map((e, index) => {
                        return (
                            <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{e.name}</th>
                                    <th>{e.age}</th>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Map