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

  return (
    <>
      {/* {
        new Array(2).fill('').map(x => <input key={x} type="text" style={style} value={syncData} onChange={onTextChanged} />)
      } */}
      {
        _.range(2).map(x => <input key={x} type="text" style={style} value={syncData} onChange={onTextChanged} />)
      }
    </>
  );
}
