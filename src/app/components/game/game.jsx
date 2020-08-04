import React, { useEffect, useState, useReducer, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GuessingBird } from './components/guessing-bird/guessing-bird.jsx';
import { BIRD_GROUPS, BIRDS_DATA } from '../../data/birds-data.js';
import { BIRDS_PER_ROUND, MAX_POINTS_PER_ROUND } from './game.models.js';
import { Answers } from './components/answers/answers.jsx';
import { BirdDescription } from './components/bird-description/bird-description.jsx';
import { useStyles } from './game.styles.js';
import {
  isShowAnswerSelector,
  roundPointsSelector,
  isGameStartedSelector,
  isGameEndedSelector,
} from './store/game.selectors.js';
import {
  setIsShowAnswer,
  setIndexOfBirdGroup,
  setRoundPoints,
  increaseGameScore,
  setChosenBird,
  setIsGameStarted,
  setIsGameEnded,
} from './store/game.actions.js';
import { EndGameNotification } from './components/end-game-notification/end-game-notification.jsx';

export const Game = () => {
  const dispatch = useDispatch();
  const isShowAnswer = useSelector(isShowAnswerSelector);
  const roundPoints = useSelector(roundPointsSelector);
  const isGameStarted = useSelector(isGameStartedSelector);
  const isGameEnded = useSelector(isGameEndedSelector);
  const classes = useStyles({ isShowAnswer });
  const [birdsForRounds, setBirdsForRounds] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const [indexCurrentRound, incrementIndexCurrentRound] = useReducer(
    (prevState, value) => (!isNaN(value) ? value : ++prevState),
    0,
  );

  useEffect(() => {
    if (isGameStarted) {
      return;
    }

    const birdGroups = Array.from(Object.values(BIRD_GROUPS));
    const birdsForRounds = birdGroups.map((birdGroup) =>
      [...BIRDS_DATA[birdGroup]].sort(() => Math.random() - 0.5).slice(0, BIRDS_PER_ROUND + 1),
    );

    const correctAnswersForRounds = Array.from({ length: birdsForRounds.length }, (_, index) => index).map(() =>
      Math.floor(Math.random() * BIRDS_PER_ROUND),
    );

    console.log(correctAnswersForRounds);
    setBirdsForRounds(birdsForRounds);
    setCorrectAnswers(correctAnswersForRounds);
    incrementIndexCurrentRound(0);
    dispatch(setRoundPoints(MAX_POINTS_PER_ROUND));
    dispatch(setIsGameStarted(true));
  }, [dispatch, isGameStarted]);

  useEffect(() => {
    dispatch(setIndexOfBirdGroup(indexCurrentRound));
  }, [dispatch, indexCurrentRound]);

  const onNextLevelClick = useCallback(() => {
    if (!isShowAnswer) {
      return;
    }

    dispatch(increaseGameScore(roundPoints));

    if (indexCurrentRound === birdsForRounds.length - 1) {
      dispatch(setIsGameEnded(true));
      return;
    }

    incrementIndexCurrentRound();
    dispatch(setIsShowAnswer(false));
    dispatch(setRoundPoints(MAX_POINTS_PER_ROUND));
    dispatch(setChosenBird(null));
  }, [birdsForRounds, dispatch, indexCurrentRound, isShowAnswer, roundPoints]);

  return (
    <div>
      {isGameEnded && <EndGameNotification />}
      {isGameStarted && !isGameEnded && (
        <div>
          <GuessingBird
            imgUrl={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].image}
            songUrl={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].voice}
            birdName={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].name}
            latinBirdName={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].latinName}
            isShowLatinName={false}
            isShowAnswer={isShowAnswer}
          />
          <div className={classes.answersAndDescriptionContainer}>
            <Answers
              answers={birdsForRounds[indexCurrentRound]}
              correctAnswer={birdsForRounds[indexCurrentRound][correctAnswers[indexCurrentRound]].name}
            />
            <BirdDescription />
          </div>
          <div className={classes.nextLevelButton} onClick={onNextLevelClick}>
            Следующий уровень
          </div>
        </div>
      )}
    </div>
  );
};
