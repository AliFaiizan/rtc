import {combineReducers} from 'redux';
import repositoriesReducer from './repositoriesReducers';

const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;
//this is the root state to be used in the store
export type RootState = ReturnType<typeof reducers>;