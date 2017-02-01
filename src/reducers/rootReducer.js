import { combineReducers } from 'redux'
import activeThreadIdReducer from './activeThreadIdReducer.js'
import threadsReducer from './threadsReducer.js'

const rootReducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer,
});

export default rootReducer;
