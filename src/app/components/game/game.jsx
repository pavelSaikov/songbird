import React, { useEffect, useState } from 'react';

import { GuessingBird } from './components/guessing-bird/guessing-bird.jsx';
import { BIRD_GROUPS, BIRDS_DATA } from '../../data/birds-data.js';
import { BIRDS_PER_ROUND } from './game.models.js';

export const Game = () => {
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const birdGroups = Array.from(Object.values(BIRD_GROUPS));
    const birdsForRounds = birdGroups.map((birdGroup) =>
      [...BIRDS_DATA[birdGroup]].sort(() => Math.random() - 0.5).slice(0, BIRDS_PER_ROUND + 1),
    );
    setGameData(birdsForRounds);
  }, []);

  return (
    gameData && (
      <div>
        <GuessingBird imgUrl={gameData[0][0].image} songUrl={gameData[0][0].voice} birdName={gameData[0][0].name} />
      </div>
    )
  );
};
