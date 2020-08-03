import React from 'react';
import { Provider } from 'react-redux';

import { Header } from './components/header/header.jsx';
import { Game } from './components/game/game.jsx';
import { store } from './store/index.js';

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Game />
      </Provider>
    </div>
  );
};
