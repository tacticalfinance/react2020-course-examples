import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

export default function GuessTheNumber(props) {
  const [theNumber] = useState(_.random(1, 1000));
  const [results, setResults] = useState("I've chosen a number between 1 and 1000 - try to guess it");
  const CORRECT = 'B O O M !';
  const TOO_SMALL = 'Try a larger number';
  const TOO_LARGE = 'Try a smaller number';


  const style = {
    display: 'block',
    margin: '10px 0px',
  }

  // A good best practice is to always return the same result
  // from render()
  // this means it'll be cleaner to store shouldICheat value in a
  // state variable, and every time the number changes you can
  // randomize a new value for it
  function shouldICheat() {
    return _.random(1, 10) >= 9;
  }

  function onGuessChanged(e) {
    const myGuess = Number(e.target.value);

    if (myGuess > theNumber) {
      setResults(!shouldICheat() ? TOO_LARGE : TOO_SMALL);
    }
    else if (myGuess < theNumber) {
      setResults(!shouldICheat() ? TOO_SMALL : TOO_LARGE);
    }
    else {
      setResults(CORRECT)
    }

  }

  return (
    <>
      <label>
        Your Guess
        <input type="text" style={style} onChange={onGuessChanged} />
      </label>

      <label>
        {results}
      </label>
    </>
  );
}
