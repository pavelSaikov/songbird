import React from 'react';
import { useSelector } from 'react-redux';

import { chosenBirdSelector } from '../../store/game.selectors';
import { GuessingBird } from '../guessing-bird/guessing-bird.jsx';
import { useStyles } from './bird-description.styles';

export const BirdDescription = () => {
  const chosenBird = useSelector(chosenBirdSelector);
  const classes = useStyles();

  return (
    <div className={classes.birdDescriptionContainer}>
      {chosenBird && (
        <div>
          <GuessingBird
            birdName={chosenBird.name}
            latinBirdName={chosenBird.latinName}
            imgUrl={chosenBird.image}
            songUrl={chosenBird.voice}
            isShowLatinName={true}
            isShowAnswer={true}
          />
          <div className={classes.descriptionContainer}>Description</div>
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
