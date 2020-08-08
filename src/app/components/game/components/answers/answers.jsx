import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import correctAnswerSound from '../../../../../assets/sounds/correct-answer.mp3';
import incorrectAnswerSound from '../../../../../assets/sounds/incorrect-answer.mp3';
import { useStyles } from './answers.styles';
import { isShowAnswerSelector, roundPointsSelector } from '../../store/game.selectors';
import { setChosenBird, setIsShowAnswer, setRoundPoints } from '../../store/game.actions';

export const Answers = ({ answers, correctAnswer }) => {
  const dispatch = useDispatch();
  const roundPoints = useSelector(roundPointsSelector);
  const {
    answersContainer,
    answerContainer,
    lastAnswer,
    circle,
    circleContainer,
    standard,
    correct,
    incorrect,
    text,
  } = useStyles();
  const isShowAnswer = useSelector(isShowAnswerSelector);
  const [answersData, setAnswersData] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const preparedAnswers = answers.map(({ name }) => ({
      answer: name,
      isCorrect: name === correctAnswer,
      isAnswered: false,
    }));

    setAnswersData(preparedAnswers);
  }, [answers, correctAnswer]);

  const onAnswer = useCallback(
    (answer, index) => {
      if (audioRef.current && !audioRef.current.ended) {
        return;
      }

      dispatch(setChosenBird({ ...answers[index] }));

      if (isShowAnswer) {
        return;
      }

      const answerObj = { ...answersData[index] };
      answerObj.isAnswered = true;

      audioRef.current = new Audio();

      if (answer === correctAnswer) {
        dispatch(setIsShowAnswer(true));
        audioRef.current.src = correctAnswerSound;
      } else {
        dispatch(setRoundPoints(roundPoints - 1));
        audioRef.current.src = incorrectAnswerSound;
      }

      audioRef.current.play();

      const newAnswersData = [...answersData];
      newAnswersData.splice(index, 1, answerObj);
      setAnswersData(newAnswersData);
    },
    [dispatch, answers, isShowAnswer, answersData, correctAnswer, roundPoints],
  );

  return (
    answersData && (
      <div className={answersContainer}>
        {answersData.map(({ answer, isCorrect, isAnswered }, index) => (
          <div
            key={`${answer}${isCorrect}${isAnswered}`}
            className={`${answerContainer} ${index === answers.length - 1 ? lastAnswer : ''}`}
            onClick={() => onAnswer(answer, index)}
          >
            <div className={circleContainer}>
              <div className={`${circle} ${!isAnswered ? standard : isCorrect ? correct : incorrect}`}></div>
            </div>
            <div className={text}>{answer}</div>
          </div>
        ))}
      </div>
    )
  );
};

Answers.propTypes = {
  answers: PropTypes.array,
  correctAnswer: PropTypes.string,
};
