import React from 'react';

import { GuessingBird } from './components/guessing-bird/guessing-bird.jsx';

export const Game = () => {
  return (
    <div>
      <GuessingBird imgUrl={'a'} songUrl={'b'} birdName={'c'} />
    </div>
  );
};
