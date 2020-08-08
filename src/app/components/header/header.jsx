import React from 'react';
import { useSelector } from 'react-redux';

import logo from '../../../assets/logo.svg';
import { BIRD_GROUPS_TRANSLATION_MAP } from '../../data/birds-data';
import { useStyle } from './header.styles';
import { indexOfBirdGroupSelector, gameScopeSelector } from '../game/store/game.selectors';

export const Header = () => {
  const indexOfBirdGroup = useSelector(indexOfBirdGroupSelector);
  const gameScope = useSelector(gameScopeSelector);
  const classes = useStyle();

  const birdGroupsKeys = Array.from(BIRD_GROUPS_TRANSLATION_MAP.keys());

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoAndScopeContainer}>
        <div className={classes.logo}>
          <img src={logo} width="100%" />
        </div>
        <div>Scope: {gameScope}</div>
      </div>
      <div className={classes.birdGroupsContainer}>
        {birdGroupsKeys.map((key, index) => (
          <div
            key={key}
            className={`${!index ? 'first' : ''} ${index === birdGroupsKeys.length - 1 ? 'last' : ''} ${
              classes.birdGroup
            } ${index === indexOfBirdGroup ? 'active' : ''}`}
          >
            {BIRD_GROUPS_TRANSLATION_MAP.get(key)}
          </div>
        ))}
      </div>
    </div>
  );
};
