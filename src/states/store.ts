import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducers from './reducers.ts';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
