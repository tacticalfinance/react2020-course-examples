import React from 'react';
import { useState } from 'react';

export default function TimeParser(props) {
  const [seconds, setSeconds] = useState(3600);

  const style = {
    display: 'block',
    margin: '10px 0px',
  }
  function floor(num) {
    return Math.floor(num * 1000) / 1000;
  }

  function onTimeChanged(e, factor) {
    setSeconds(Number(e.target.value) * factor);
  }

  return (
    <>
      <label>
        Seconds
        <input type="text" style={style} value={seconds} onChange={(e) => onTimeChanged(e, 1)} />
      </label>

      <label>
        Minuts
        <input type="text" style={style} value={floor(seconds / 60)} onChange={(e) => onTimeChanged(e, 60)} />
      </label>

      <label>
        Hours
        <input type="text" style={style} value={floor(seconds / 3600)} onChange={(e) => onTimeChanged(e, 3600)} />
      </label>
    </>
  );
}
