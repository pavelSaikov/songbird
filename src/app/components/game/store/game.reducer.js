import { setIsShowAnswer } from './game.actions';

const DEFAULT_GAME_STATE = { isShowAnswer: true };

export const gameReducer = (state = DEFAULT_GAME_STATE, action) => {
  switch (action.type) {
    case setIsShowAnswer.type:
      return { ...state, isShowAnswer: setIsShowAnswer.payload };
    default:
      return state;
  }
};
