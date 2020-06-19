import React, { useState } from 'react';

export default function GameBoard(props) {
    const { activeItem, onClickHandler } = props

    const boxStyle = {
        width: '30px',
        height: '30px',
        border: 'none',
        cursor: 'pointer',
        marginRight: '1px',
        color: 'transparent',
        outline: 'none'
    }

    const activeItemStyle = {
        ...boxStyle,
        background: 'red'
    }

    const nonActiveItemStyle = {
        ...boxStyle,
        background: 'gray'
    }

    return (
        <div>
            {
                _.range(10).map(index => <input key={index} type="text" style={activeItem == index ? activeItemStyle : nonActiveItemStyle} onClick={() => onClickHandler(index)} />)
            }
        </div>
    );

}