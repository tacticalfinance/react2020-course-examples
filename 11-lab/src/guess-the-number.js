import React from 'react';
import { useState } from 'react';
import _ from 'lodash';

export default function GuessTheNumber(props) {
  const [theNumber] = useState(_.random(1, 1000));
  const [myGuess, setMyGuess] = useState(null);
  const [shouldICheat, setShouldICheat] = useState(false);
  const CORRECT = 'B O O M !';
  const TOO_SMALL = 'Try a larger number';
  const TOO_LARGE = 'Try a smaller number';
  const results = getResults();


  const style = {
    display: 'block',
    margin: '10px 0px',
  }


  function onGuessChanged(e) {
    setShouldICheat(_.random(1, 10) >= 9);
    setMyGuess(Number(e.target.value));
    console.log(theNumber)
  }

  function getResults() {
    if (myGuess == null)
      return "I've chosen a number between 1 and 1000 - try to guess it";

    if (myGuess > theNumber) {
      return !shouldICheat ? TOO_LARGE : TOO_SMALL;
    }
    else if (myGuess < theNumber) {
      return !shouldICheat ? TOO_SMALL : TOO_LARGE;
    }
    else {
      return CORRECT;
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
