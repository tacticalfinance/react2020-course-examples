import React from 'react'

export default function FilterBox(props) {
    const { handleChange } = props;

    const style = {
        boxSizing: "border-box",
        width: "100px",
        height: "20px"
    }

    return (
        <div>
            <input type="text" style={style} onChange={(e) => handleChange(e.target.value)}></input>
        </div >
    )
}