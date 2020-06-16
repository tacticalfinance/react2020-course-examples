import React from 'react';
import { useState } from 'react';
import tinycolor from 'tinycolor2'

export default function ColorPicker(props) {
  const { defaultColor } = props;
  const [baseColor, setBaseColor] = useState(defaultColor);

  function getDivStyle(index) {
    const amount = Math.abs(4 - index) * 8;
    return {
      float: 'left',
      width: '50px',
      height: '50px',
      backgroundColor: index < 5
        ? tinycolor(baseColor).lighten(amount)
        : tinycolor(baseColor).darken(amount)
    }
  }

  function onColorChanged(e) {
    setBaseColor(e.target.value);
  }

  return (
    <div>
      <div>
        <input type="color" value={baseColor} onChange={onColorChanged} />
      </div>
      <div style={{ display: 'flex' }}>
        {
          _.range(9).map(x => <div key={x} style={getDivStyle(x)} />)
        }
      </div>
    </div>
  );
}

ColorPicker.defaultProps = {
  defaultColor: '#e8e117'
}