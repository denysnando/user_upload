import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

/* Sagas */

import AuthSagas from './auth/sagas';
import PhotosSagas from './photos/sagas';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  any,
  unknown
> {
  return yield all([...AuthSagas, ...PhotosSagas]);
}
