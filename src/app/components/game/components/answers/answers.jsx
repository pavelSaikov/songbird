import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useStyles } from './answers.styles';
import { isShowAnswerSelector } from '../../store/game.selectors';

export const Answers = ({ answers, correctAnswer, onAnswerClick }) => {
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

  useEffect(() => {
    const preparedAnswers = answers.map(({ name }) => ({
      answer: name,
      isCorrect: name === correctAnswer,
      isAnswered: false,
    }));

    setAnswersData(preparedAnswers);
  }, [answers, correctAnswer]);

  const onAnswer = useCallback(
    (answer) => {
      onAnswerClick(answer);

      if (isShowAnswer) {
        return;
      }

      const newAnswerData = [...answersData];
      newAnswerData.forEach((answerObj) => {
        if (answerObj.answer !== answer) {
          return;
        }

        answerObj.isAnswered = true;
        answerObj.isCorrect = answer === correctAnswer;
      });
      setAnswersData(newAnswerData);
    },
    [answersData, correctAnswer, onAnswerClick, isShowAnswer],
  );

  return (
    answersData && (
      <div className={answersContainer}>
        {answersData.map(({ answer, isCorrect, isAnswered }, index) => (
          <div
            key={`${answer}${isCorrect}${isAnswered}`}
            className={`${answerContainer} ${index === answers.length - 1 ? lastAnswer : ''}`}
            onClick={() => onAnswer(answer)}
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
  onAnswerClick: PropTypes.func,
};
