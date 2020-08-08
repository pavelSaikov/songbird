import React, { useEffect, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import Amplitude from 'amplitudejs';

import './style.css';

export const AudioPlayer = ({ audioUrl }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useReducer((state) => !state, false);
  useEffect(() => {
    Amplitude.init({
      songs: [
        {
          url: audioUrl,
        },
      ],
      callbacks: {
        stop: () => setIsAudioPlaying(false),
      },
    });
  }, [audioUrl]);

  const onPlayPauseClick = useCallback(() => setIsAudioPlaying(), []);

  return (
    <div id="flat-black-player-container">
      <div id="player-up">
        <div className="amplitude-play-pause" id="play-pause" onClick={onPlayPauseClick}>
          <i className={isAudioPlaying ? 'icon-pause' : 'icon-play'}></i>
        </div>
        <div id="player-progress-bar-container">
          <progress id="song-played-progress" className="amplitude-song-played-progress"></progress>
          <progress id="song-buffered-progress" className="amplitude-buffered-progress" value="0"></progress>
          <div id="time-container">
            <span className="amplitude-current-time time-container"></span>
            <span className="amplitude-duration-time time-container"></span>
          </div>
        </div>
      </div>
      <div id="volume-container">
        <div className="volume-height-container">
          <i className="icon-volume-high"></i>
        </div>
        <input type="range" className="amplitude-volume-slider" step=".1" />
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  audioUrl: PropTypes.string,
};
