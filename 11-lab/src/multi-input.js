import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

export default function MultiInput(props) {
  const [syncData, setSyncData] = useState('type something...');

  const style = {
    display: 'block',
    margin: '10px',
  }

  function onTextChanged(e) {
    setSyncData(e.target.value);
  }

  // We can use a loop to make the code a bit cleaner
  // (If you don't want to use lodash you can use the following
  // for native JS:
  // new Array(10).fill('').map(x => ... );
  return (
    <>
      {
        _.range(5).map(x => <input key={x} type="text" style={style} value={syncData} onChange={onTextChanged} />)
      }
    </>
  );
}
