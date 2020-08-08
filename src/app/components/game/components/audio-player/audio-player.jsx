import React, { useRef, useEffect } from 'react';
import GreenAudioPlayer from 'green-audio-player';
import PropTypes from 'prop-types';

import { useStyles } from './audio-player.styles';

export const AudioPlayer = ({ audio, selector }) => {
  const classes = useStyles();
  const audioPlayer = useRef(null);

  useEffect(() => {
    audioPlayer.current = new GreenAudioPlayer(`.${selector}`);
  }, [selector, audio]);

  return (
    <div>
      <div key={audio} className={`${selector} ${classes.test}`}>
        <audio src={`${audio}`}></audio>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  audio: PropTypes.string,
  selector: PropTypes.string,
};
