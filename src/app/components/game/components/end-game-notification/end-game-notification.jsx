import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gameScopeSelector } from '../../store/game.selectors';
import { MAX_POINTS_PER_ROUND } from '../../game.models';
import { BIRD_GROUPS } from '../../../../data/birds-data';
import { useStyles } from './end-game-notification.styles';
import { restartGame } from '../../store/game.actions';

export const EndGameNotification = () => {
  const dispatch = useDispatch();
  const gameScope = useSelector(gameScopeSelector);
  const classes = useStyles();
  const maxGameScope = useMemo(() => MAX_POINTS_PER_ROUND * Array.from(Object.keys(BIRD_GROUPS)).length, []);

  const onRestartClick = useCallback(() => {
    dispatch(restartGame());
  }, [dispatch]);

  return (
    <div className={classes.endGameNotificationContainer}>
      {gameScope !== maxGameScope && (
        <div>
          <div className={`${classes.text} ${classes.header}`}>Поздравляем!</div>
          <div className={`${classes.text} ${classes.description}`}>
            Вы прошли викторину и набрали {gameScope} из {maxGameScope} возможных баллов
          </div>
          <div className={classes.restartButton} onClick={onRestartClick}>
            Попробовать ещё раз
          </div>
        </div>
      )}
      {gameScope === maxGameScope && (
        <div>
          <div className={`${classes.text} ${classes.header}`}>Поздравляем!</div>
          <div className={`${classes.text} ${classes.description}`}>
            Вы прошли викторину и набрали максимальное количество баллов!
          </div>
        </div>
      )}
    </div>
  );
};
