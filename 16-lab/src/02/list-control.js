import React, { useState } from 'react';

export default function ListControl(props) {
    const { items } = props

    const style = {
        boxSizing: "border-box",
        width: "100px",
        height: "20px"

    }

    return (
        <div>
            <select style={style}>
                {items.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );

}