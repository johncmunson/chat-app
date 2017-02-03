import { combineReducers } from 'redux'
import activeThreadIdReducer from './activeThreadIdReducer.js'
import threadsReducer from './threadsReducer.js'
import modalReducer from './modalReducer.js'

const rootReducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer,
  modalActive: modalReducer
});

export default rootReducer;
