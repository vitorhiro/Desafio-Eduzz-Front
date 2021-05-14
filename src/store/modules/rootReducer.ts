import { combineReducers } from 'redux';

import auth from './auth/reducer.js';
import states from './states/reducer.js';

export default combineReducers({ auth, states });
