import { createAction } from '../../../store/create-action';

export const setIsShowAnswer = createAction('[Game] Set Is Show Answer');
export const setChosenBird = createAction('[Game] Set Chosen Bird');
export const setIndexOfBirdGroup = createAction('[Game] Set Index Of Bird Group');
export const setRoundPoints = createAction('[Game] Set Round Points');
export const increaseGameScore = createAction('[Game] Increase Game Score');
export const setIsGameStarted = createAction('[Game] Set Is Game Started');
export const restartGame = createAction('[Game] Restart Game');
export const setIsGameEnded = createAction('[Game] Set Is Game Ended');
