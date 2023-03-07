import { configureStore } from '@reduxjs/toolkit'
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();
export default configureStore({
    middleware: [logger],
    reducer: searchRobots
});
