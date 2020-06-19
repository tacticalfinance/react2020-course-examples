import React from 'react';
import ReactDOM from 'react-dom';
import CatchTheRed from './01/catch-the-red';
import FilterControl from './02/filter-control';



const App = () => {

  return (
    <div>
      <CatchTheRed />
      <FilterControl />
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
