import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { rootReducer } from './root-reducer';

import logger from 'redux-logger';

export const store = createStore(
    rootReducer, applyMiddleware(thunk, logger)
)