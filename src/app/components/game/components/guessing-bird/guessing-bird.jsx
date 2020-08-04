import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import birdMock from '../../../../../assets/images/bird-mock.jpg';
import { useStyles } from './guessing-bird.styles';
import { AudioPlayer } from './audio-player/audio-player.jsx';

export const GuessingBird = ({ imgUrl, songUrl, birdName, latinBirdName, isShowLatinName, isShowAnswer }) => {
  const classes = useStyles({ isShowLatinName });

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
        {isShowLatinName && <div className={classes.latinNameContainer}>{latinBirdName}</div>}
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
  latinBirdName: PropTypes.string,
  isShowLatinName: PropTypes.bool,
  isShowAnswer: PropTypes.bool,
};
