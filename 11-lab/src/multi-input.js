import React from 'react';
import { useState } from 'react';

export default function MultiInput(props) {
  const [syncData, setSyncData] = useState('type something...');

  const style = {
    display: 'block',
    margin: '10px',
  }

  function onTextChanged(e) {
    setSyncData(e.target.value);
  }

  return (
    <>
      <input type="text" style={style} value={syncData} onChange={onTextChanged} />
      <input type="text" style={style} value={syncData} onChange={onTextChanged} />
      <input type="text" style={style} value={syncData} onChange={onTextChanged} />
      <input type="text" style={style} value={syncData} onChange={onTextChanged} />
      <input type="text" style={style} value={syncData} onChange={onTextChanged} />
    </>
  );
}