import React from 'react';
import ReactDOM from 'react-dom';
import MultiInput from './multi-input';
import TimeParser from './time-parser';
import GuessTheNumber from './guess-the-number';
import DivColor from './div-color';

const App = () => {

  return (
    <div>
      <h1>04. Div Color</h1>
      <DivColor defaultColor="ff9900" />

      <h1>03. Guess The Number</h1>
      <GuessTheNumber />

      <h1>02. Time Parser</h1>
      <TimeParser />

      <h1>01. Multi Input</h1>
      <MultiInput />
    </div>
  )
};


const root = document.querySelector('main');
ReactDOM.render(<App />, root);