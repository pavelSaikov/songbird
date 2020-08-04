import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import birdMock from '../../../../../assets/images/bird-mock.jpg';
import { isShowAnswerSelector } from '../../store/game.selectors';
import { useStyles } from './guessing-bird.styles';
import { AudioPlayer } from './audio-player/audio-player.jsx';

export const GuessingBird = ({ imgUrl, songUrl, birdName }) => {
  const classes = useStyles();
  const isShowAnswer = useSelector(isShowAnswerSelector);

  const birdNameMemo = useMemo(() => {
    if (isShowAnswer) {
      return birdName;
    }

    return '*'.repeat(birdName.length);
  }, [isShowAnswer, birdName]);

  return (
    <div className={classes.guessingBirdContainer}>
      <div className={classes.imageContainer}>
        <img src={isShowAnswer ? imgUrl : birdMock} width={'100%'} className={classes.image} />
      </div>
      <div className={classes.nameAndSongContainer}>
        <div className={classes.nameContainer}>{birdNameMemo}</div>
        <div>
          <AudioPlayer audioUrl={songUrl} />
        </div>
      </div>
    </div>
  );
};

GuessingBird.propTypes = {
  imgUrl: PropTypes.string,
  songUrl: PropTypes.string,
  birdName: PropTypes.string,
};
