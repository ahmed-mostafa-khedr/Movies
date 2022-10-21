import {createStore} from 'redux';
import { moviesReducer } from './rootReducers';

import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


export const store= createStore(moviesReducer , applyMiddleware(thunk))

