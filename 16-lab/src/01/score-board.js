import React from 'react'

export default function ScoreBoard(props) {
    const { score } = props;

    const style = {
        margin: "0 10px",
        lineHeight: "30px"
    }

    return (
        <div style={style}>Your Score: {score}</div>
    )
}