import React from 'react';
import reactDOM from 'react-dom';

import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);

    const store = configureStore;

});

// window.getState = store.getState; 
// window.dispatch = store.dispatch;