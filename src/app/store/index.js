import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { gameReducer } from '../components/game/store/game.reducer';

export const store = createStore(gameReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
