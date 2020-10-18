import { IState as AuthState } from '~/store/ducks/auth/types';

export interface ApplicationState {
  auth: AuthState;
}

export interface User {}
