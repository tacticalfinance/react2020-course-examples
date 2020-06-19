import ScoreBoard from './score-board';
import GameBoard from './game-board';
import React, { useState } from 'react';
import _ from 'lodash';


export default function CatchTheRed(props) {
    const [active, setActive] = useState(_.random(0, 9));
    const [score, setScore] = useState(0);

    function gameReset() {
        setScore(0);
        setActive(_.random(0, 9));
    }

    function handleClick(index) {
        setScore(index == active ? score + 10 : score - 5);
        if (index == active)
            setActive(_.random(0, 9));
    }

    const style = {
        display: "flex",
        margin: "10px"
    }

    return (
        <div style={style}>
            <GameBoard activeItem={active} onClickHandler={handleClick} />
            <button onClick={gameReset}>Reset</button>
            <ScoreBoard score={score} />
        </div>
    );
}