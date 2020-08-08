import React from 'react';
import { useSelector } from 'react-redux';

import { chosenBirdSelector } from '../../store/game.selectors';
import { useStyles } from './bird-description.styles';
import { AudioPlayer } from '../audio-player/audio-player.jsx';

export const BirdDescription = () => {
  const chosenBird = useSelector(chosenBirdSelector);
  const classes = useStyles();

  return (
    <div className={classes.birdDescriptionContainer}>
      {chosenBird && (
        <div className={classes.chosenBirdContainer}>
          <div className={classes.mainInfoContainer}>
            <div
              className={classes.imageContainer}
              style={{
                backgroundImage: `url("${chosenBird.image}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            ></div>
            <div className={classes.nameAndSongContainer}>
              <div className={classes.nameContainer}>{chosenBird.name}</div>
              <div className={classes.latinNameContainer}>{chosenBird.latinName}</div>
              <div>
                <AudioPlayer selector={classes.audioPlayer} audio={chosenBird.voice} />
              </div>
            </div>
          </div>
          <div className={classes.descriptionContainer}>
            <p>{chosenBird.description}</p>
          </div>
        </div>
      )}
      {!chosenBird && (
        <div className={classes.messageContainer}>
          <div>Послушайте пение птицы.</div>
          <div>Выберите птицу из списка.</div>
        </div>
      )}
    </div>
  );
};
