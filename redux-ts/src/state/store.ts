import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

export const store = creatStore(reducers, {}, applyMiddleware(thunk));
