import {
  setIsShowAnswer,
  setChosenBird,
  setIndexOfBirdGroup,
  increaseGameScore,
  setIsGameStarted,
  setRoundPoints,
  restartGame,
  setIsGameEnded,
} from './game.actions';

const DEFAULT_GAME_STATE = {
  isShowAnswer: false,
  chosenBird: null,
  indexOfBirdGroup: 0,
  roundPoints: 0,
  gameScope: 0,
  isGameStarted: false,
  isGameEnded: false,
};

export const gameReducer = (state = DEFAULT_GAME_STATE, action) => {
  switch (action.type) {
    case setIsShowAnswer.type:
      return { ...state, isShowAnswer: action.payload };
    case setChosenBird.type:
      return { ...state, chosenBird: action.payload };
    case setIndexOfBirdGroup.type:
      return { ...state, indexOfBirdGroup: action.payload };
    case setRoundPoints.type:
      return { ...state, roundPoints: action.payload };
    case increaseGameScore.type:
      return { ...state, gameScope: state.gameScope + action.payload };
    case setIsGameStarted.type:
      return { ...state, isGameStarted: action.payload };
    case restartGame.type:
      return { ...DEFAULT_GAME_STATE };
    case setIsGameEnded.type:
      return { ...state, isGameEnded: action.payload };
    default:
      return state;
  }
};
