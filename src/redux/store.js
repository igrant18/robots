import { configureStore } from '@reduxjs/toolkit'
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({searchRobots, requestRobots});


const logger = createLogger();
export default configureStore({
    middleware: [thunkMiddleware, logger],
    reducer: rootReducer
});
