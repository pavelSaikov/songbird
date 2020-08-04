import React, { useEffect, useState, useReducer, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { GuessingBird } from './components/guessing-bird/guessing-bird.jsx';
import { BIRD_GROUPS, BIRDS_DATA } from '../../data/birds-data.js';
import { BIRDS_PER_ROUND } from './game.models.js';
import { Answers } from './components/answers/answers.jsx';
import { setIsShowAnswer } from './store/game.actions.js';

export const Game = () => {
  const dispatch = useDispatch();
  const [birdsForRounds, setBirdsForRounds] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const [indexCurrentRound] = useReducer((prevState) => prevState++, 0);

  useEffect(() => {
    const birdGroups = Array.from(Object.values(BIRD_GROUPS));
    const birdsForRounds = birdGroups.map((birdGroup) =>
      [...BIRDS_DATA[birdGroup]].sort(() => Math.random() - 0.5).slice(0, BIRDS_PER_ROUND + 1),
    );
    const correctAnswersForRounds = Array.from({ length: birdsForRounds.length }, (_, index) => index).map(() =>
      Math.floor(Math.random() * BIRDS_PER_ROUND),
    );
    setBirdsForRounds(birdsForRounds);
    setCorrectAnswers(correctAnswersForRounds);
  }, []);

  const onAnswerClick = useCallback(
    (answer) => {
      if (answer === birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].name) {
        dispatch(setIsShowAnswer(true));
      }
    },
    [dispatch, correctAnswers, indexCurrentRound, birdsForRounds],
  );

  return (
    birdsForRounds && (
      <div>
        <GuessingBird
          imgUrl={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].image}
          songUrl={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].voice}
          birdName={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].name}
          latinBirdName={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].latinName}
          isShowLatinName={false}
        />
        <div>
          <Answers
            answers={birdsForRounds[indexCurrentRound]}
            correctAnswer={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].name}
            onAnswerClick={onAnswerClick}
          />
        </div>
      </div>
    )
  );
};
