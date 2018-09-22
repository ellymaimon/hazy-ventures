import React from 'react';
import Dialogue from './Dialogue';

const Game = (props) => {
  return (
    <div>
      Hello {props.name}, welcome to the Hazy Adventure!
      <Dialogue />
    </div>
  );
}

export default Game;
