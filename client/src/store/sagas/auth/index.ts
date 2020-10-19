import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { toastr } from 'react-redux-toastr';

import { ISetPropAction } from '~/store/ducks/auth/types';
import AuthActions from '~/store/ducks/auth';

import api from '~/services/api';

export function* signIn({ email, password }: ISetPropAction): SagaIterator {
  const { signInSuccess } = AuthActions;

  try {
    const res = yield call(api.post, '/auth/login', { email, password });

    const { name, token, exp, user_id } = res.data;

    yield put(signInSuccess(user_id, token, name, exp, email));
    toastr.success('Successful', 'You are logged in.');
  } catch (err) {
    if (err.response.status === 401) {
      toastr.error('Error', 'Some information is wrong.');
    } else {
      toastr.error('Error', 'Connection failed.');
    }
    console.log(err.response);
  }
}

export function* signUp({
  name,
  email,
  password,
  password_confirmation,
}: ISetPropAction): SagaIterator {
  const { signUpSuccess } = AuthActions;

  try {
    const res = yield call(api.post, 'users', {
      name,
      email,
      password,
      password_confirmation,
    });

    const { token, exp, user_id } = res.data;

    yield put(signUpSuccess(user_id, name, email, token, exp));
    toastr.success('Successful', 'You are logged in.');
  } catch (err) {
    if (err.response.status === 401) {
      toastr.error('Error', 'Some information is wrong.');
    } else {
      toastr.error('Error', 'Connection failed.');
    }
    console.log(err.response);
  }
}
