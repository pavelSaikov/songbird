import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isShowAnswerSelector } from '../../store/game.selectors';

export const GuessingBird = ({ imgUrl, songUrl, birdName }) => {
  const isShowAnswer = useSelector(isShowAnswerSelector);

  return (
    isShowAnswer && (
      <div>
        <div>{imgUrl}</div>
        <div>
          <div>{songUrl}</div>
          <div>{birdName}</div>
        </div>
      </div>
    )
  );
};

GuessingBird.propTypes = {
  imgUrl: PropTypes.string,
  songUrl: PropTypes.string,
  birdName: PropTypes.string,
};
