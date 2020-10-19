import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as photos } from './photos';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as user } from './user';

export default combineReducers({
  auth,
  photos,
  toastr,
  user,
});
