import { setIsShowAnswer } from './game.actions';

const DEFAULT_GAME_STATE = { isShowAnswer: false };

export const gameReducer = (state = DEFAULT_GAME_STATE, action) => {
  switch (action.type) {
    case setIsShowAnswer.type:
      return { ...state, isShowAnswer: action.payload };
    default:
      return state;
  }
};
