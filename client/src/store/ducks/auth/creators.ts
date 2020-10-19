import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    signInRequest: ['email', 'password'],
    signInSuccess: ['token', 'user', 'exp'],
    signUpRequest: ['name', 'email', 'password', 'password_confirmation'],
    signUpSuccess: ['name', 'email', 'token', 'exp'],
  },
  { prefix: '@auth/' }
);

export const AuthTypes = Types;
export default Creators;
