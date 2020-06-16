import React from 'react';
import { useState } from 'react';

export default function DivColor(props) {
  const { defaultColor } = props;
  const [bgColor, setBgColor] = useState(defaultColor);

  const divStyle = {
    width: '100px',
    marginLeft: '10px',
    backgroundColor: `#${bgColor}`,
  }

  function onTextChanged(e) {
    setBgColor(e.target.value);
  }

  return (
    <div style={{ display: 'flex' }}>
      <span>Fill in a color:</span>
      <input type="text" style={{ marginLeft: '10px' }} value={bgColor} onChange={onTextChanged} />
      <div style={divStyle}></div>
    </div>
  );
}
