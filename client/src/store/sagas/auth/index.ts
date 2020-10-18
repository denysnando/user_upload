import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ISetPropAction } from '~/store/ducks/auth/types';
import AuthActions from '~/store/ducks/auth';

import api from '~/services/api';

export function* signIn({ email, password }: ISetPropAction): SagaIterator {
  const { signInSuccess } = AuthActions;

  try {
    const res = yield call(api.post, '/auth/login', { email, password });

    const { user, token, exp } = res.data;

    yield put(signInSuccess(token, user, exp));
  } catch (err) {
    console.log(err.response);
  }
}
