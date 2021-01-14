import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

export default createStore(rootReducer, undefined, applyMiddleware(thunk));
