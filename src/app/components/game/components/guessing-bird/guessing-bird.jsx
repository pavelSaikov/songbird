import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import birdMock from '../../../../../assets/images/bird-mock.jpg';
import { useStyles } from './guessing-bird.styles';
import { AudioPlayer } from '../audio-player/audio-player.jsx';

export const GuessingBird = ({ imgUrl, songUrl, birdName, isShowAnswer }) => {
  const classes = useStyles();

  const birdNameMemo = useMemo(() => {
    if (isShowAnswer) {
      return birdName;
    }

    return birdName
      .split('')
      .map((symbol) => (symbol === ' ' ? ' ' : '*'))
      .join('');
  }, [isShowAnswer, birdName]);

  return (
    <div className={classes.guessingBirdContainer}>
      <div
        className={classes.imageContainer}
        style={{
          backgroundImage: `url("${isShowAnswer ? imgUrl : birdMock}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className={classes.nameAndSongContainer}>
        <div className={classes.nameContainer}>{birdNameMemo}</div>
        <div>
          <AudioPlayer selector={classes.audioPlayer} audio={songUrl} />
        </div>
      </div>
    </div>
  );
};

GuessingBird.propTypes = {
  imgUrl: PropTypes.string,
  songUrl: PropTypes.string,
  birdName: PropTypes.string,
  isShowAnswer: PropTypes.bool,
};
