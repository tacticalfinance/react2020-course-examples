import React from 'react';
import { useState } from 'react';

export default function TimeParser(props) {
  // You don't really need 3 state variables here do you?
  const [seconds, setSeconds] = useState(3600);
  const [minutes, setMinutes] = useState(60);
  const [hours, setHours] = useState(1);

  const style = {
    display: 'block',
    margin: '10px 0px',
  }
  function floor(num) {
    return Math.floor(num * 1000) / 1000;
  }

  function onTimeChanged(e, factor) {
    const seconds = Number(e.target.value) * factor;
    setSeconds(seconds);
    setMinutes(floor(seconds / 60));
    setHours(floor(seconds / 3600));
  }

  return (
    <>
      <label>
        Seconds
        <input type="text" style={style} value={seconds} onChange={(e) => onTimeChanged(e, 1)} />
      </label>

      <label>
        Minuts
        <input type="text" style={style} value={minutes} onChange={(e) => onTimeChanged(e, 60)} />
      </label>

      <label>
        Hours
        <input type="text" style={style} value={hours} onChange={(e) => onTimeChanged(e, 3600)} />
      </label>
    </>
  );
}
